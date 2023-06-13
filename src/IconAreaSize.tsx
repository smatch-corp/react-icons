import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      clipRule='evenodd'
      d='M5 3C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5ZM14 5.5C13.45 5.5 13 5.95 13 6.5C13 7.05 13.45 7.5 14 7.5H15.09L7.5 15.09V14C7.5 13.45 7.05 13 6.5 13C5.95 13 5.5 13.45 5.5 14V17.5C5.5 18.05 5.95 18.5 6.5 18.5H10C10.55 18.5 11 18.05 11 17.5C11 16.95 10.55 16.5 10 16.5H8.91L16.5 8.91V10C16.5 10.55 16.95 11 17.5 11C18.05 11 18.5 10.55 18.5 10V6.5C18.5 5.95 18.05 5.5 17.5 5.5H14Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconAreaSize };
ForwardRef.displayName = 'IconAreaSize';
