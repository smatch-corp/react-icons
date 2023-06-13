import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z'
      fill='currentColor'
    />
    <path
      d='M20.65 11.6495L17.86 8.85954C17.54 8.53954 17 8.75954 17 9.20954V10.9995H10C9.45 10.9995 9 11.4495 9 11.9995C9 12.5495 9.45 12.9995 10 12.9995H17V14.7895C17 15.2395 17.54 15.4595 17.85 15.1395L20.64 12.3495C20.84 12.1595 20.84 11.8395 20.65 11.6495Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconLogoutRounded };
ForwardRef.displayName = 'IconLogoutRounded';
