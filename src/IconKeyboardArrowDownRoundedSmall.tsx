import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.10489 10.2185L12.0037 13.1174L14.9026 10.2185C15.194 9.92716 15.6646 9.92716 15.956 10.2185C16.2474 10.5099 16.2474 10.9806 15.956 11.272L12.5267 14.7013C12.2353 14.9927 11.7647 14.9927 11.4733 14.7013L8.04397 11.272C7.75259 10.9806 7.75259 10.5099 8.04397 10.2185C8.33535 9.93463 8.81351 9.92716 9.10489 10.2185Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardArrowDownRoundedSmall };
ForwardRef.displayName = 'IconKeyboardArrowDownRoundedSmall';
