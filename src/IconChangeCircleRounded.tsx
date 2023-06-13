import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12.91 18.15C12.6 18.46 12.06 18.24 12.06 17.8V17C12.04 17 12.02 17 12 17C10.72 17 9.44 16.51 8.46 15.54C7.03 14.11 6.65 12.02 7.32 10.24C7.51 9.73 8.18 9.6 8.56 9.99C8.78 10.21 8.83 10.53 8.73 10.81C8.27 12.05 8.53 13.49 9.53 14.49C10.23 15.19 11.15 15.52 12.07 15.5V14.56C12.07 14.11 12.61 13.89 12.92 14.21L14.54 15.83C14.74 16.03 14.74 16.34 14.54 16.54L12.91 18.15ZM15.44 14.02C15.22 13.8 15.17 13.48 15.27 13.2C15.73 11.96 15.47 10.52 14.47 9.52C13.77 8.82 12.85 8.48 11.94 8.5V9.44C11.94 9.89 11.4 10.11 11.09 9.79L9.46 8.18C9.26 7.98 9.26 7.67 9.46 7.47L11.08 5.85C11.39 5.54 11.93 5.76 11.93 6.2V7.01C13.23 6.99 14.54 7.46 15.53 8.46C16.96 9.89 17.34 11.98 16.67 13.76C16.48 14.28 15.82 14.41 15.44 14.02Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconChangeCircleRounded };
ForwardRef.displayName = 'IconChangeCircleRounded';
