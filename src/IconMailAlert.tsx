import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18 13C16.52 13 15.14 12.53 14.01 11.74L13.06 12.34C12.41 12.75 11.59 12.75 10.94 12.34L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L12.7 10.56C11.64 9.33 11 7.74 11 6C11 5.3 11.11 4.63 11.29 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V11.74C20.86 12.53 19.49 13 18 13Z"
      fill="currentColor"
    />
    <path
      d="M18 1C15.24 1 13 3.24 13 6C13 8.76 15.24 11 18 11C20.76 11 23 8.76 23 6C23 3.24 20.76 1 18 1ZM18 9C17.72 9 17.5 8.78 17.5 8.5C17.5 8.22 17.72 8 18 8C18.28 8 18.5 8.22 18.5 8.5C18.5 8.78 18.28 9 18 9ZM18.5 6.5C18.5 6.78 18.28 7 18 7C17.72 7 17.5 6.78 17.5 6.5V3.5C17.5 3.22 17.72 3 18 3C18.28 3 18.5 3.22 18.5 3.5V6.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconMailAlert };
ForwardRef.displayName = 'IconMailAlert';
