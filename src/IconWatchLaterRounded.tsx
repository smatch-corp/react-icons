import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM15.55 15.8L11.47 13.29C11.17 13.11 10.99 12.79 10.99 12.44V7.75C11 7.34 11.34 7 11.75 7C12.16 7 12.5 7.34 12.5 7.75V12.2L16.34 14.51C16.7 14.73 16.82 15.2 16.6 15.56C16.38 15.91 15.91 16.02 15.55 15.8Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconWatchLaterRounded };
ForwardRef.displayName = 'IconWatchLaterRounded';
