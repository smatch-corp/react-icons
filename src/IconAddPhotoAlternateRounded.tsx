import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.02 5H19V2.98C19 2.44 18.56 2 18.02 2H17.99C17.44 2 17 2.44 17 2.98V5H14.99C14.45 5 14.01 5.44 14 5.98V6.01C14 6.56 14.44 7 14.99 7H17V9.01C17 9.55 17.44 10 17.99 9.99H18.02C18.56 9.99 19 9.55 19 9.01V7H21.02C21.56 7 22 6.56 22 6.02V5.98C22 5.44 21.56 5 21.02 5ZM16 9.01V8H14.99C14.46 8 13.96 7.79 13.58 7.42C13.21 7.04 13 6.54 13 5.98C13 5.62 13.1 5.29 13.27 5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21H17C18.1 21 19 20.1 19 19V10.72C18.7 10.89 18.36 11 17.98 11C16.89 10.99 16 10.1 16 9.01ZM15.96 19H6C5.59 19 5.35 18.53 5.6 18.2L7.58 15.57C7.79 15.29 8.2 15.31 8.4 15.59L10 18L12.61 14.52C12.81 14.26 13.2 14.25 13.4 14.51L16.35 18.19C16.61 18.52 16.38 19 15.96 19Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconAddPhotoAlternateRounded };
ForwardRef.displayName = 'IconAddPhotoAlternateRounded';
