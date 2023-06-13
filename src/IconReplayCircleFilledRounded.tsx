import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM18 12.74C17.88 15.83 15.33 18.38 12.24 18.5C9.23 18.62 6.68 16.51 6.12 13.68C5.99 13.07 6.48 12.5 7.1 12.5C7.57 12.5 7.98 12.83 8.08 13.3C8.5 15.37 10.52 16.87 12.8 16.42C14.36 16.12 15.62 14.86 15.92 13.3C16.42 10.74 14.47 8.5 12 8.5V10.29C12 10.74 11.46 10.96 11.15 10.64L8.35 7.85C8.15 7.65 8.15 7.34 8.35 7.14L11.14 4.35C11.46 4.04 12 4.26 12 4.71V6.5C15.39 6.5 18.13 9.32 18 12.74Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconReplayCircleFilledRounded };
ForwardRef.displayName = 'IconReplayCircleFilledRounded';
