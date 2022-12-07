type t = (string, string)
type component = {name: string}

let arrayFromDict = (dict: Js.Dict.t<component>): array<t> => {
  let normalizeName = string => {
    "Icon" ++ string->Js.String2.replaceByRe(%re("/Icon\//"), "")
  }

  dict
  ->Js.Dict.entries
  ->Array.map(((id, component)) => {
    (id, component.name->normalizeName)
  })
}

module NodeUrl = {
  @module("node:url") external fileURLToPath: string => string = "fileURLToPath"
}

%%private(
  @val external importMetaUrl: string = "import.meta.url"
  let __filename = NodeUrl.fileURLToPath(importMetaUrl)
  let __dirname = __filename->Node.Path.dirname
)

let isNotExist = ((_, name)) => {
  Node.Path.join([__dirname, "../src", name ++ ".tsx"])->Node.Fs.existsSync === false
}

let downloadSvg = (images, icon) => {
  let (id, name) = icon

  open Fetch
  open Promise

  switch images->Js.Dict.get(id) {
  | Some(url) =>
    Some(fetch(url, ())->then(Response.text)->thenResolve(svg => (name, svg->String.trim)))
  | _ => None
  }
}

let convertToComponent = ((name, svg)) => {
  open Promise

  svg
  ->Svgr.transform(
    Svgr.transformOption(~icon=true, ~jsxRuntime=#automatic, ~ref=true, ~typescript=true),
  )
  ->thenResolve(svg => {
    svg
    ->Js.String2.replaceByRe(%re("/fillOpacity={.+?}/g"), "")
    ->Js.String2.replaceByRe(%re(`/fill="((?!none).+?)"/g`), `fill="currentColor"`)
    ->Js.String2.replaceByRe(
      %re("/export default ForwardRef/"),
      `ForwardRef.displayName = '${name}'; export { ForwardRef as ${name} }`,
    )
  })
  ->thenResolve(svg => (name, svg))
}

let writeIcon = ((name, code)) => {
  let path = Node.Path.join([__dirname, "../src", name ++ ".tsx"])
  Node.Fs.writeFileAsUtf8Sync(path, code)
}

let updateIndex = () => {
  let path = Node.Path.join([__dirname, "../src"])

  let index =
    path
    ->Node.Fs.readdirSync
    ->Array.keep(Js.Re.test_(%re("/^Icon.+\.tsx$/")))
    ->Array.map(filename => {
      let componentName = filename->Js.String2.replaceByRe(%re("/\.tsx$/"), "")
      `export { ${componentName} } from './${componentName}.js';`
    })
    ->Js.Array2.joinWith("\n")

  let path = Node.Path.join([path, "index.ts"])
  Node.Fs.writeFileAsUtf8Sync(path, index)
}
