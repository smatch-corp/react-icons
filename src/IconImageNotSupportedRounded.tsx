import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21.19 21.1901L20.41 20.4101L18 18.0001L13.41 13.4101L3.58999 3.59008L2.80999 2.81008C2.41999 2.42008 1.78999 2.42008 1.39999 2.81008C0.999986 3.20008 0.999986 3.83008 1.38999 4.22008L2.99999 5.83008V19.0001C2.99999 20.1001 3.89999 21.0001 4.99999 21.0001H18.17L19.78 22.6101C20.17 23.0001 20.8 23.0001 21.19 22.6101C21.58 22.2201 21.58 21.5801 21.19 21.1901ZM6.01999 18.0001C5.59999 18.0001 5.36999 17.5201 5.62999 17.1901L8.11999 13.9901C8.31999 13.7401 8.69999 13.7301 8.89999 13.9801L11 16.5101L12.17 15.0001L15.17 18.0001H6.01999ZM21 18.1701L5.82999 3.00008H19C20.1 3.00008 21 3.90008 21 5.00008V18.1701Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconImageNotSupportedRounded };
ForwardRef.displayName = 'IconImageNotSupportedRounded';
