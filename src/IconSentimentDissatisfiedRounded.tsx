import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z'
      fill='currentColor'
    />
    <path
      d='M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z'
      fill='currentColor'
    />
    <path
      d='M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 14C10.1 14 8.37 14.97 7.35 16.58C7.13 16.93 7.24 17.39 7.59 17.61C7.94 17.83 8.4 17.72 8.62 17.37C9.36 16.19 10.62 15.49 12 15.49C13.38 15.49 14.64 16.19 15.38 17.37C15.52 17.6 15.77 17.72 16.02 17.72C16.16 17.72 16.29 17.68 16.42 17.61C16.77 17.39 16.88 16.93 16.66 16.58C15.63 14.96 13.9 14 12 14Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconSentimentDissatisfiedRounded };
ForwardRef.displayName = 'IconSentimentDissatisfiedRounded';
