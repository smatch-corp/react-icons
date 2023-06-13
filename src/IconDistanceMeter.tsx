import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M19 5V4.5C19 3.95 19.45 3.5 20 3.5C20.55 3.5 21 3.95 21 4.5V7.5C21 8.05 20.55 8.5 20 8.5C19.45 8.5 19 8.05 19 7.5V7H5V7.5C5 8.05 4.55 8.5 4 8.5C3.45 8.5 3 8.05 3 7.5V4.5C3 3.95 3.45 3.5 4 3.5C4.55 3.5 5 3.95 5 4.5V5H19ZM4 10.5H20C20.55 10.5 21 10.9206 21 11.4346V16.7617C21 18.8271 19.21 20.5 17 20.5H7C4.79 20.5 3 18.8271 3 16.7617V11.4346C3 10.9206 3.45 10.5 4 10.5ZM17 18.6308C18.1 18.6308 19 17.7897 19 16.7617V12.3692H17V15.014C17 15.528 16.55 15.9486 16 15.9486C15.45 15.9486 15 15.528 15 15.014V12.3692H13V15.014C13 15.528 12.55 15.9486 12 15.9486C11.45 15.9486 11 15.528 11 15.014V12.3692H9V15.014C9 15.528 8.55 15.9486 8 15.9486C7.45 15.9486 7 15.528 7 15.014V12.3692H5V16.7617C5 17.7897 5.9 18.6308 7 18.6308H17Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconDistanceMeter };
ForwardRef.displayName = 'IconDistanceMeter';
