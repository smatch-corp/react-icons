import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM11 10V7C11 6.45 11.45 6 12 6C12.55 6 13 6.45 13 7V10H14.79C15.24 10 15.46 10.54 15.14 10.85L12.35 13.64C12.15 13.84 11.84 13.84 11.64 13.64L8.85 10.85C8.54 10.54 8.76 10 9.21 10H11ZM16 17H8C7.45 17 7 16.55 7 16C7 15.45 7.45 15 8 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconDownloadforOfflineRounded };
ForwardRef.displayName = 'IconDownloadforOfflineRounded';
