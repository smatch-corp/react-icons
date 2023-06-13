import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.4 20.3995L20.85 12.9195C21.66 12.5695 21.66 11.4295 20.85 11.0795L3.4 3.59953C2.74 3.30953 2.01 3.79953 2.01 4.50953L2 9.11953C2 9.61953 2.37 10.0495 2.87 10.1095L17 11.9995L2.87 13.8795C2.37 13.9495 2 14.3795 2 14.8795L2.01 19.4895C2.01 20.1995 2.74 20.6895 3.4 20.3995Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconSendRounded };
ForwardRef.displayName = 'IconSendRounded';
