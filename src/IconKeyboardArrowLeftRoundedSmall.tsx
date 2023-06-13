import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.7815 9.10562L10.8826 12.0045L13.7815 14.9033C14.0728 15.1947 14.0728 15.6654 13.7815 15.9568C13.4901 16.2481 13.0194 16.2481 12.728 15.9568L9.29872 12.5275C9.00734 12.2361 9.00734 11.7654 9.29872 11.474L12.728 8.04471C13.0194 7.75333 13.4901 7.75333 13.7815 8.04471C14.0654 8.33608 14.0728 8.81424 13.7815 9.10562Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardArrowLeftRoundedSmall };
ForwardRef.displayName = 'IconKeyboardArrowLeftRoundedSmall';
