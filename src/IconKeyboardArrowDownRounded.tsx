import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.11997 9.28957L12 13.1696L15.88 9.28957C16.27 8.89957 16.9 8.89957 17.29 9.28957C17.68 9.67957 17.68 10.3096 17.29 10.6996L12.7 15.2896C12.31 15.6796 11.68 15.6796 11.29 15.2896L6.69997 10.6996C6.30997 10.3096 6.30997 9.67957 6.69997 9.28957C7.08997 8.90957 7.72997 8.89957 8.11997 9.28957Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardArrowDownRounded };
ForwardRef.displayName = 'IconKeyboardArrowDownRounded';
