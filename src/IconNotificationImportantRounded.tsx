import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 23C13.1 23 13.99 22.11 13.99 21.01H10.01C10.01 22.11 10.9 23 12 23ZM20.29 18.29L19 17V11C19 7.65 16.64 4.85 13.5 4.17V3C13.5 2.17 12.83 1.5 12 1.5C11.17 1.5 10.5 2.17 10.5 3V4.17C7.35999 4.85 4.99999 7.65 4.99999 11V17L3.70999 18.29C3.07999 18.92 3.51999 20 4.40999 20H19.58C20.48 20 20.92 18.92 20.29 18.29ZM13 16H11V14H13V16ZM13 11C13 11.55 12.55 12 12 12C11.45 12 11 11.55 11 11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconNotificationImportantRounded };
ForwardRef.displayName = 'IconNotificationImportantRounded';
