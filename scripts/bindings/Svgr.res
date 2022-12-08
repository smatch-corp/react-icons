type transformOption
@obj
external transformOption: (
  ~icon: bool,
  ~jsxRuntime: [#automatic],
  ~typescript: bool,
  ~ref: bool,
  ~template: 'template,
  ~namedExport: string,
) => transformOption = ""

@module("@svgr/core")
external transform: (string, transformOption) => Promise.t<String.t> = "transform"

let template = (_name: string) =>
  %raw("
  function (variables, { tpl }) {
    return tpl`
      import { forwardRef } from 'react';
      import type { SVGAttributes } from 'react';

      export const ${_name} = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
        (props, ref) => {
          return (
            ${variables.jsx}
          )
        }
      )

      ${_name}.displayName = '${_name}';
    `;
  }
")
