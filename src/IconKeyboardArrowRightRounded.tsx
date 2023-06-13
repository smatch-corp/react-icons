import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.29 15.8805L13.17 12.0005L9.29 8.12047C8.9 7.73047 8.9 7.10047 9.29 6.71047C9.68 6.32047 10.31 6.32047 10.7 6.71047L15.29 11.3005C15.68 11.6905 15.68 12.3205 15.29 12.7105L10.7 17.3005C10.31 17.6905 9.68 17.6905 9.29 17.3005C8.91 16.9105 8.9 16.2705 9.29 15.8805Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardArrowRightRounded };
ForwardRef.displayName = 'IconKeyboardArrowRightRounded';
