import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 7C13 6.45 12.56 6 12 6C11.45 6 11 6.44 11 7V9H9C8.45 9 8 9.44 8 10C8 10.55 8.44 11 9 11H11V13C11 13.55 11.44 14 12 14C12.55 14 13 13.56 13 13V11H15C15.55 11 16 10.56 16 10C16 9.45 15.56 9 15 9H13V7ZM12 2C16.2 2 20 5.22 20 10.2C20 13.38 17.55 17.12 12.66 21.43C12.28 21.76 11.71 21.76 11.33 21.43C6.45 17.12 4 13.38 4 10.2C4 5.22 7.8 2 12 2Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconAddLocationRounded };
ForwardRef.displayName = 'IconAddLocationRounded';
