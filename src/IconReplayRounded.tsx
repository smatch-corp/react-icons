import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 4.99954V2.20954C12 1.75954 11.46 1.53954 11.15 1.85954L7.35 5.64954C7.15 5.84954 7.15 6.15954 7.35 6.35954L11.14 10.1495C11.46 10.4595 12 10.2395 12 9.78954V6.99954C15.73 6.99954 18.68 10.4195 17.86 14.2895C17.39 16.5595 15.55 18.3895 13.29 18.8595C9.72 19.6095 6.54 17.1595 6.06 13.8495C5.99 13.3695 5.57 12.9995 5.08 12.9995C4.48 12.9995 4 13.5295 4.08 14.1295C4.7 18.5195 8.88 21.7695 13.61 20.8495C16.73 20.2395 19.24 17.7295 19.85 14.6095C20.84 9.47954 16.94 4.99954 12 4.99954Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconReplayRounded };
ForwardRef.displayName = 'IconReplayRounded';
