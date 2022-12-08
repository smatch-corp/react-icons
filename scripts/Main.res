let run = async () => {
  let result = switch await Figma.Request.QueryComponentsOrInstances.request() {
  | Ok(data) =>
    switch data.nodes->Js.Dict.get(Env.figmaIconFrameId) {
    | Some(nodes) => nodes.components
    | _ => Js.Exn.raiseError("아이콘 프레임 노드에 접근할 수 없습니다.")
    }
  | _ =>
    Js.Exn.raiseError(
      "아이콘 프레임 내의 컴포넌트나 인스턴스 정보를 가져올 수 없습니다.",
    )
  }
  Js.log("> 아이콘 컴포넌트 노드 불러옴")

  let icons = result->Icon.arrayFromDict->Array.keep(Icon.isNotExist)
  Js.log(`> 작업해야 하는 아이콘 수: ${icons->Array.length->Int.toString}개`)

  let images = switch await Figma.Request.QueryImages.requestWithArgs(icons) {
  | Ok(data) => data.images
  | _ => Js.Exn.raiseError("아이콘 이미지 URL을 가져올 수 없습니다.")
  }
  Js.log("> SVG 다운로드 주소 가져옴")

  let icons = await icons->Array.keepMap(Icon.downloadSvg(images))->Promise.all
  Js.log(
    `> 다운로드 후 작업할 수 있는 아이콘 수: ${icons
      ->Array.length
      ->Int.toString}개`,
  )

  let icons = icons->Array.keep(((_, svg)) => svg->String.trim !== "")
  Js.log(`> Trim 작업 후 아이콘 수: ${icons->Array.length->Int.toString}개`)

  let icons = await icons->Array.map(Icon.convertToComponent)->Promise.all
  Js.log(
    `> 컴포넌트 변환 후 작업할 수 있는 아이콘 수: ${icons
      ->Array.length
      ->Int.toString}개`,
  )

  icons->Array.forEach(Icon.writeIcon)

  Icon.updateIndex()
  Js.log(`> index.ts 업데이트 완료`)
}

run()->ignore
