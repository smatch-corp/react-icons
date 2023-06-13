import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M3 7H21C21.55 7 22 6.55 22 6C22 5.45 21.55 5 21 5H3C2.45 5 2 5.45 2 6C2 6.55 2.45 7 3 7ZM14.5 11H21.48C21.9 11 22.14 11.47 21.88 11.8C20.71 13.29 18.99 15.5 18.99 15.5V18C18.99 18.55 18.54 19 17.99 19C17.44 19 16.99 18.55 16.99 18V15.5C16.99 15.5 15.27 13.29 14.1 11.8C13.85 11.47 14.08 11 14.5 11ZM3 17H11C11.55 17 12 17.45 12 18C12 18.55 11.55 19 11 19H3C2.45 19 2 18.55 2 18C2 17.45 2.45 17 3 17ZM3 11H11C11.55 11 12 11.45 12 12C12 12.55 11.55 13 11 13H3C2.45 13 2 12.55 2 12C2 11.45 2.45 11 3 11Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconListFilter };
ForwardRef.displayName = 'IconListFilter';
