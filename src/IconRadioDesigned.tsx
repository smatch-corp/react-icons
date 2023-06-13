import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M3 12C3 7.04 7.04 3 12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21C7.04 21 3 16.96 3 12ZM5 12C5 15.86 8.14 19 12 19C15.86 19 19 15.86 19 12C19 8.14 15.86 5 12 5C8.14 5 5 8.14 5 12ZM17.4 11.9996C17.4 14.9819 14.9823 17.3996 12 17.3996C9.01764 17.3996 6.59998 14.9819 6.59998 11.9996C6.59998 9.01727 9.01764 6.59961 12 6.59961C14.9823 6.59961 17.4 9.01727 17.4 11.9996Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconRadioDesigned };
ForwardRef.displayName = 'IconRadioDesigned';
