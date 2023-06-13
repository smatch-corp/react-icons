import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.77 7.23L19.78 7.22L16.59 4.03C16.3 3.74 15.82 3.74 15.53 4.03C15.24 4.32 15.24 4.8 15.53 5.09L17.11 6.67C16.06 7.07 15.35 8.14 15.53 9.38C15.69 10.48 16.63 11.37 17.73 11.49C18.2 11.54 18.61 11.46 19 11.29V18.5C19 19.05 18.55 19.5 18 19.5C17.45 19.5 17 19.05 17 18.5V14C17 12.9 16.1 12 15 12H14V5C14 3.9 13.1 3 12 3H6C4.9 3 4 3.9 4 5V20C4 20.55 4.45 21 5 21H13C13.55 21 14 20.55 14 20V13.5H15.5V18.36C15.5 19.67 16.44 20.86 17.74 20.99C19.24 21.14 20.5 19.97 20.5 18.5V9C20.5 8.31 20.22 7.68 19.77 7.23ZM18 10C17.45 10 17 9.55 17 9C17 8.45 17.45 8 18 8C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10ZM8 16.12V13.5H6.83C6.45 13.5 6.21 13.1 6.39 12.76L9.06 7.76C9.3 7.31 10 7.48 10 8V11H11.14C11.52 11 11.76 11.41 11.57 11.75L8.93 16.37C8.68 16.81 8 16.63 8 16.12Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconEvStationRounded };
ForwardRef.displayName = 'IconEvStationRounded';
