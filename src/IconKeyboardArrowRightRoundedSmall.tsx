import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.2185 14.8954L13.1174 11.9965L10.2185 9.09766C9.92716 8.80629 9.92715 8.3356 10.2185 8.04422C10.5099 7.75284 10.9806 7.75284 11.272 8.04422L14.7013 11.4735C14.9927 11.7649 14.9927 12.2356 14.7013 12.527L11.272 15.9563C10.9806 16.2476 10.5099 16.2476 10.2185 15.9563C9.93463 15.6649 9.92716 15.1867 10.2185 14.8954Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardArrowRightRoundedSmall };
ForwardRef.displayName = 'IconKeyboardArrowRightRoundedSmall';
