import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_2709_19799)'>
      <path
        d='M4.09 11.35H4.81C5.82 11.35 6.36 10.75 6.36 9.83004C6.36 8.91004 5.82 8.29004 4.8 8.29004H3V12.75H4.09V11.34V11.35ZM4.09 9.38004H4.78C5.05 9.38004 5.25 9.54004 5.25 9.84004C5.25 10.14 5.05 10.3 4.78 10.3H4.09V9.39004V9.38004Z'
        fill='currentColor'
      />
      <path
        d='M6.76001 8.3098V12.7598H8.54001C9.79001 12.7598 10.62 11.8798 10.62 10.5298C10.62 9.1798 9.79001 8.2998 8.54001 8.2998H6.76001V8.3098ZM9.48001 10.5398C9.48001 11.1898 9.16001 11.6598 8.51001 11.6598H7.85001V9.4198H8.51001C9.16001 9.4198 9.48001 9.8898 9.48001 10.5298V10.5398Z'
        fill='currentColor'
      />
      <path
        d='M14.17 9.3798V8.2998H11.05V12.7598H12.14V11.1498H14.03V10.0698H12.14V9.3798H14.17Z'
        fill='currentColor'
      />
      <path
        d='M18 13C15.24 13 13 15.24 13 18C13 20.76 15.24 23 18 23C20.76 23 23 20.76 23 18C23 15.24 20.76 13 18 13ZM16.6 17H17.5V15.5C17.5 15.22 17.72 15 18 15C18.28 15 18.5 15.22 18.5 15.5V17H19.39C19.62 17 19.73 17.27 19.57 17.42L18.17 18.82C18.07 18.92 17.91 18.92 17.82 18.82L16.42 17.42C16.26 17.27 16.38 17 16.6 17ZM20 20.5H16C15.72 20.5 15.5 20.28 15.5 20C15.5 19.72 15.72 19.5 16 19.5H20C20.27 19.5 20.5 19.72 20.5 20C20.5 20.28 20.27 20.5 20 20.5Z'
        fill='currentColor'
      />
      <path
        d='M5.5 19.9998C5.22 19.9998 5 19.7798 5 19.4998V13.7598H3V19.4998C3 20.8798 4.12 21.9998 5.5 21.9998H12.26C11.84 21.3998 11.51 20.7198 11.29 19.9998H5.5Z'
        fill='currentColor'
      />
      <path
        d='M5 4.5C5 4.22 5.22 4 5.5 4H12.47C12.6 4 12.73 4.05 12.82 4.15L16.85 8.19C16.94 8.28 17 8.41 17 8.54V11.08C17.33 11.03 17.66 11 18 11C18.34 11 18.67 11.03 19 11.08V8.54C19 7.87 18.74 7.25 18.27 6.77L14.23 2.73C13.76 2.26 13.13 2 12.46 2H5.5C4.12 2 3 3.12 3 4.5V7.3H5V4.5Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_2709_19799'>
        <rect fill='currentColor' height={21} transform='translate(3 2)' width={20} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconPDFDownload };
ForwardRef.displayName = 'IconPDFDownload';
