import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.5125 9.28063L12.0025 11.4806L8.4925 9.28063C8.1925 9.10063 7.8125 9.31063 7.8125 9.66063C7.8125 9.81063 7.8925 9.95063 8.0225 10.0406L11.4525 12.1806C11.7925 12.3906 12.2225 12.3906 12.5625 12.1806L15.9925 10.0406C16.1225 9.96063 16.2025 9.81063 16.2025 9.66063C16.2025 9.31063 15.8225 9.10063 15.5225 9.28063H15.5125Z"
      fill="currentColor"
    />
    <path
      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17.24 15.14C17.24 15.72 16.77 16.19 16.19 16.19H7.81C7.23 16.19 6.76 15.72 6.76 15.14V8.85C6.76 8.27 7.23 7.8 7.81 7.8H16.19C16.77 7.8 17.24 8.27 17.24 8.85V15.14Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconMailCircleRounded };
ForwardRef.displayName = 'IconMailCircleRounded';
