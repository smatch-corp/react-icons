import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.24999 5.61C6.56999 8.59 9.99999 13 9.99999 13V18C9.99999 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18V13C14 13 17.43 8.59 19.75 5.61C20.26 4.95 19.79 4 18.95 4H5.03999C4.20999 4 3.73999 4.95 4.24999 5.61Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconFilterAltRounded };
ForwardRef.displayName = 'IconFilterAltRounded';
