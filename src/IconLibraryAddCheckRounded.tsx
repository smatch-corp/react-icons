import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM11.76 13.28L9.69 11.2C9.31 10.81 9.31 10.19 9.69 9.8C10.08 9.41 10.71 9.41 11.1 9.8L12.46 11.17L16.88 6.71C17.27 6.32 17.9 6.32 18.29 6.71C18.67 7.1 18.67 7.72 18.29 8.11L13.16 13.28C12.79 13.68 12.15 13.68 11.76 13.28ZM3 6C2.45 6 2 6.45 2 7V20C2 21.1 2.9 22 4 22H17C17.55 22 18 21.55 18 21C18 20.45 17.55 20 17 20H5C4.45 20 4 19.55 4 19V7C4 6.45 3.55 6 3 6Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconLibraryAddCheckRounded };
ForwardRef.displayName = 'IconLibraryAddCheckRounded';
