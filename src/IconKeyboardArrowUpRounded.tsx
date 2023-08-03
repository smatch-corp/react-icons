import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.11997 14.7105L12 10.8305L15.88 14.7105C16.27 15.1005 16.9 15.1005 17.29 14.7105C17.68 14.3205 17.68 13.6905 17.29 13.3005L12.7 8.71047C12.31 8.32047 11.68 8.32047 11.29 8.71047L6.69997 13.3005C6.30997 13.6905 6.30997 14.3205 6.69997 14.7105C7.08997 15.0905 7.72997 15.1005 8.11997 14.7105Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardArrowUpRounded };
ForwardRef.displayName = 'IconKeyboardArrowUpRounded';
