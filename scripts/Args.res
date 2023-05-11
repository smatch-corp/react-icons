%%private(let args = Node.Process.argv->Array.sliceToEnd(2))

let isForce = args->Js.Array2.some(arg => {
  switch arg {
  | "--force" => true
  | _ => false
  }
})
