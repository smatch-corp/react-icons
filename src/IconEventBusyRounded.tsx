import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.84 16.47L11.75 14.56L13.66 16.47C13.95 16.76 14.43 16.76 14.72 16.47C15.01 16.18 15.01 15.7 14.72 15.41L12.81 13.5L14.72 11.59C15.01 11.3 15.01 10.82 14.72 10.53C14.43 10.24 13.95 10.24 13.66 10.53L11.75 12.44L9.84 10.53C9.55 10.24 9.07 10.24 8.78 10.53C8.49 10.82 8.49 11.3 8.78 11.59L10.69 13.5L8.78 15.41C8.49 15.7 8.49 16.18 8.78 16.47C9.07 16.76 9.55 16.76 9.84 16.47ZM19 3H18V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V3H8V2C8 1.45 7.55 1 7 1C6.45 1 6 1.45 6 2V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 19H6C5.45 19 5 18.55 5 18V8H19V18C19 18.55 18.55 19 18 19Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconEventBusyRounded };
ForwardRef.displayName = 'IconEventBusyRounded';
