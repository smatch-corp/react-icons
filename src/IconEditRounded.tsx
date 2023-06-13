import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3 17.4596V20.4996C3 20.7796 3.22 20.9996 3.5 20.9996H6.54C6.67 20.9996 6.8 20.9496 6.89 20.8496L17.81 9.93957L14.06 6.18957L3.15 17.0996C3.05 17.1996 3 17.3196 3 17.4596ZM20.71 7.03957C21.1 6.64957 21.1 6.01957 20.71 5.62957L18.37 3.28957C17.98 2.89957 17.35 2.89957 16.96 3.28957L15.13 5.11957L18.88 8.86957L20.71 7.03957Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconEditRounded };
ForwardRef.displayName = 'IconEditRounded';
