import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 3H14C14.55 3 15 2.55 15 2C15 1.45 14.55 1 14 1H10C9.45 1 9 1.45 9 2C9 2.55 9.45 3 10 3Z"
      fill="currentColor"
    />
    <path
      d="M19.03 7.39L19.78 6.64C20.16 6.26 20.17 5.63 19.78 5.24L19.77 5.23C19.38 4.84 18.76 4.85 18.37 5.23L17.62 5.98C16.07 4.74 14.12 4 12 4C7.20001 4 3.12001 7.96 3.00001 12.76C2.87001 17.84 6.94001 22 12 22C16.98 22 21 17.97 21 13C21 10.88 20.26 8.93 19.03 7.39ZM13 13C13 13.55 12.55 14 12 14C11.45 14 11 13.55 11 13V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V13Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconTimerRounded };
ForwardRef.displayName = 'IconTimerRounded';
