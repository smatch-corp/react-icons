type transformOption
@obj
external transformOption: (
  ~icon: bool,
  ~jsxRuntime: [#automatic],
  ~typescript: bool,
  ~ref: bool,
) => transformOption = ""

@module("@svgr/core")
external transform: (string, transformOption) => Promise.t<String.t> = "transform"
