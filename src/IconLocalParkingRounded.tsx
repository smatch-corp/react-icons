import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.79 3H8C6.9 3 6 3.9 6 5V19C6 20.1 6.9 21 8 21C9.1 21 10 20.1 10 19V15H13C16.57 15 19.42 11.87 18.95 8.21C18.56 5.19 15.84 3 12.79 3ZM13.2 11H10V7H13.2C14.3 7 15.2 7.9 15.2 9C15.2 10.1 14.3 11 13.2 11Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconLocalParkingRounded };
ForwardRef.displayName = 'IconLocalParkingRounded';
