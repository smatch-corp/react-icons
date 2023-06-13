import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.8951 13.7815L11.9963 10.8826L9.09742 13.7815C8.80604 14.0728 8.33535 14.0728 8.04397 13.7815C7.75259 13.4901 7.7526 13.0194 8.04397 12.728L11.4733 9.29872C11.7647 9.00734 12.2353 9.00734 12.5267 9.29872L15.956 12.728C16.2474 13.0194 16.2474 13.4901 15.956 13.7815C15.6646 14.0654 15.1865 14.0728 14.8951 13.7815Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardArrowUpRoundedSmall };
ForwardRef.displayName = 'IconKeyboardArrowUpRoundedSmall';
