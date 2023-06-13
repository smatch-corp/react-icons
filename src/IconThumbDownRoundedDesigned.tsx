import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.0655 21.065L16.5207 15.6347C16.8851 15.272 17.0918 14.7721 17.0918 14.2526L17.0918 4.4604C17.0918 3.38218 16.2056 2.5 15.1225 2.5L6.26021 2.5C5.47246 2.5 4.76348 2.97049 4.44838 3.68604L1.23827 11.1454C0.411132 13.0862 1.83894 15.2426 3.95603 15.2426L9.51955 15.2426L8.58409 19.732C8.48562 20.2221 8.63332 20.722 8.98781 21.0748C9.56878 21.6433 10.4944 21.6433 11.0655 21.065ZM21.0306 2.5C19.9475 2.5 19.0612 3.38218 19.0612 4.4604L19.0612 12.302C19.0612 13.3802 19.9475 14.2624 21.0306 14.2624C22.1138 14.2624 23 13.3802 23 12.302L23 4.4604C23 3.38218 22.1138 2.5 21.0306 2.5Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconThumbDownRoundedDesigned };
ForwardRef.displayName = 'IconThumbDownRoundedDesigned';
