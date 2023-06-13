import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20 2H4C2.9 2 2 2.9 2 4V18.82C2 19.15 2.13 19.47 2.37 19.7L4.3 21.63C4.54 21.87 4.85 22 5.18 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM16 4V10H8V4H16ZM9.5 20V16H14.5V20H9.5ZM20 20H16.5V15.5C16.5 14.67 15.83 14 15 14H9C8.17 14 7.5 14.67 7.5 15.5V20H5.49L4 18.51V4H6V10.5C6 11.33 6.67 12 7.5 12H16.5C17.33 12 18 11.33 18 10.5V4H20V20Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconSaveDesigned };
ForwardRef.displayName = 'IconSaveDesigned';
