import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 2C7.8 2 4 5.22 4 10.2C4 13.38 6.45 17.12 11.34 21.42C11.72 21.75 12.29 21.75 12.67 21.42C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2ZM12.01 16C11.42 16 10.96 15.53 10.96 14.95C10.96 14.36 11.43 13.91 12.01 13.91C12.6 13.91 13.05 14.36 13.05 14.95C13.05 15.53 12.61 16 12.01 16ZM14.52 9.83C13.89 10.76 13.29 11.04 12.96 11.64C12.88 11.78 12.83 11.9 12.8 12.13C12.75 12.52 12.44 12.81 12.05 12.81H12.02C11.58 12.81 11.23 12.43 11.27 11.99C11.3 11.72 11.36 11.42 11.52 11.15C11.93 10.42 12.7 9.99 13.15 9.35C13.63 8.67 13.36 7.41 12.01 7.41C11.4 7.41 11 7.73 10.75 8.11C10.56 8.4 10.18 8.5 9.86 8.36C9.44 8.18 9.26 7.66 9.52 7.29C10.03 6.55 10.88 6 12 6C13.23 6 14.08 6.56 14.51 7.26C14.87 7.87 15.09 8.99 14.52 9.83Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconNotListedLocationRounded };
ForwardRef.displayName = 'IconNotListedLocationRounded';
