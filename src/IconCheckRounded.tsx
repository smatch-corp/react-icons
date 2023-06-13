import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.00001 16.1703L5.53001 12.7003C5.14002 12.3103 4.51001 12.3103 4.12001 12.7003C3.73001 13.0903 3.73001 13.7203 4.12001 14.1103L8.30001 18.2903C8.69001 18.6803 9.32001 18.6803 9.71001 18.2903L20.29 7.71031C20.68 7.32031 20.68 6.69031 20.29 6.30031C19.9 5.91031 19.27 5.91031 18.88 6.30031L9.00001 16.1703Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconCheckRounded };
ForwardRef.displayName = 'IconCheckRounded';
