import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.67 21C10.32 21 10.05 20.69 10.1 20.34L11 14H7.5C6.62 14 7.17 13.25 7.19 13.22C8.45 10.99 10.34 7.69 12.84 3.29C12.94 3.11 13.14 3 13.34 3C13.69 3 13.96 3.31 13.91 3.66L13.01 10H16.52C16.92 10 17.14 10.19 16.92 10.66C13.63 16.4 11.72 19.75 11.17 20.71C11.07 20.89 10.88 21 10.67 21Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconBoltRounded };
ForwardRef.displayName = 'IconBoltRounded';
