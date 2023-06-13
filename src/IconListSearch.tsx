import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      clipRule='evenodd'
      d='M21 7H3C2.45 7 2 6.55 2 6C2 5.45 2.45 5 3 5H21C21.55 5 22 5.45 22 6C22 6.55 21.55 7 21 7ZM3 17H11C11.55 17 12 17.45 12 18C12 18.55 11.55 19 11 19H3C2.45 19 2 18.55 2 18C2 17.45 2.45 17 3 17ZM11 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H11C11.55 13 12 12.55 12 12C12 11.45 11.55 11 11 11ZM20.43 18.77C20.59 18.92 20.79 19 21 19C21.21 19 21.41 18.92 21.56 18.77C21.87 18.46 21.87 17.96 21.56 17.65L19.77 15.86C20.19 15.14 20.33 14.3 20.14 13.48C19.86 12.24 18.82 11.26 17.56 11.05C17.37 11.02 17.18 11 17 11C16.07 11 15.19 11.4 14.58 12.1C13.97 12.8 13.69 13.73 13.81 14.66C14.02 16.17 15.33 17.36 16.85 17.44H17.02C17.59 17.44 18.15 17.29 18.65 16.99L20.43 18.77ZM15.39 14.22C15.39 13.32 16.11 12.59 17.01 12.59C17.91 12.59 18.64 13.33 18.64 14.22C18.64 15.11 17.9 15.84 17.01 15.84C16.12 15.84 15.39 15.12 15.39 14.22Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconListSearch };
ForwardRef.displayName = 'IconListSearch';
