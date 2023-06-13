import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21 12V6C21 4.9 20.1 4 19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H12V20H5V10H19V12H21ZM15.13 20C14.58 20 14.22 20.56 14.45 21.06C15.23 22.79 16.97 24 19 24C21.76 24 24 21.76 24 19C24 16.24 21.76 14 19 14C17.64 14 16.4 14.55 15.5 15.43V14.75C15.5 14.34 15.16 14 14.75 14C14.34 14 14 14.34 14 14.75V17C14 17.55 14.45 18 15 18H17.25C17.66 18 18 17.66 18 17.25C18 16.84 17.66 16.5 17.25 16.5H16.55C17.18 15.88 18.05 15.5 19 15.5C20.93 15.5 22.5 17.07 22.5 19C22.5 20.93 20.93 22.5 19 22.5C17.58 22.5 16.36 21.65 15.81 20.44C15.69 20.17 15.42 20 15.13 20Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconEventRepeatRounded };
ForwardRef.displayName = 'IconEventRepeatRounded';
