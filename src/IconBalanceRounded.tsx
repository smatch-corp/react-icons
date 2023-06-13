import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 19V7.83C13.85 7.53 14.53 6.85 14.83 6H18L15.22 12.49C15.05 12.88 14.99 13.33 15.11 13.74C15.5 15.04 16.87 16 18.5 16C20.13 16 21.51 15.04 21.89 13.74C22.01 13.33 21.95 12.88 21.78 12.49L19 6H20C20.55 6 21 5.55 21 5C21 4.45 20.55 4 20 4H14.83C14.42 2.83 13.31 2 12 2C10.69 2 9.58 2.83 9.17 4H4C3.45 4 3 4.45 3 5C3 5.55 3.45 6 4 6H5L2.22 12.49C2.05 12.88 1.99 13.33 2.11 13.74C2.49 15.04 3.87 16 5.5 16C7.13 16 8.51 15.04 8.89 13.74C9.01 13.33 8.95 12.88 8.78 12.49L6 6H9.17C9.47 6.85 10.15 7.53 11 7.83V19H13ZM11 19H3C2.45 19 2 19.45 2 20C2 20.55 2.45 21 3 21H21C21.55 21 22 20.55 22 20C22 19.45 21.55 19 21 19H13H11ZM20.37 13H16.63L18.5 8.64L20.37 13ZM7.37 13H3.63L5.5 8.64L7.37 13ZM12 6C11.45 6 11 5.55 11 5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5C13 5.55 12.55 6 12 6Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconBalanceRounded };
ForwardRef.displayName = 'IconBalanceRounded';
