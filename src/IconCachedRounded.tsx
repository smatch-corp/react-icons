import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.65 8.35L15.86 11.14C15.54 11.46 15.76 12 16.21 12H18C18 15.31 15.31 18 12 18C11.21 18 10.44 17.85 9.75 17.56C9.39 17.41 8.98 17.52 8.71 17.79C8.2 18.3 8.38 19.16 9.05 19.43C9.96 19.8 10.96 20 12 20C16.42 20 20 16.42 20 12H21.79C22.24 12 22.46 11.46 22.14 11.15L19.35 8.36C19.16 8.16 18.84 8.16 18.65 8.35ZM6 12C6 8.69 8.69 6 12 6C12.79 6 13.56 6.15 14.25 6.44C14.61 6.59 15.02 6.48 15.29 6.21C15.8 5.7 15.62 4.84 14.95 4.57C14.04 4.2 13.04 4 12 4C7.58 4 4 7.58 4 12H2.21C1.76 12 1.54 12.54 1.86 12.85L4.65 15.64C4.85 15.84 5.16 15.84 5.36 15.64L8.15 12.85C8.46 12.54 8.24 12 7.79 12H6Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconCachedRounded };
ForwardRef.displayName = 'IconCachedRounded';
