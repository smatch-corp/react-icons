import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.71 3.56C2.32 3.95 2.32 4.58 2.71 4.97L5.18 7.44C5.07 7.95 5 8.47 5 9C5 13.17 9.42 18.92 11.23 21.11C11.63 21.59 12.36 21.59 12.76 21.11C13.41 20.33 14.38 19.1 15.37 17.65L18.02 20.3C18.41 20.69 19.04 20.69 19.43 20.3C19.82 19.91 19.82 19.28 19.43 18.89L4.12 3.56C3.73 3.17 3.1 3.17 2.71 3.56ZM12 2C10.16 2 8.5 2.71 7.25 3.86L10.44 7.05C10.87 6.71 11.41 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 9.59 14.29 10.13 13.94 10.56L17.49 14.11C18.37 12.36 19 10.57 19 9C19 5.13 15.87 2 12 2Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconLocationOffRounded };
ForwardRef.displayName = 'IconLocationOffRounded';
