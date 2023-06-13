import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM16 19H12V17H14V15H12V13H14V11H12V9H20V15H22V8C22 7.45 21.55 7 21 7H12V4C12 3.45 11.55 3 11 3H3C2.45 3 2 3.45 2 4V20C2 20.55 2.45 21 3 21H16V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15ZM24 20C24 20.55 23.55 21 23 21H22V22C22 22.55 21.55 23 21 23C20.45 23 20 22.55 20 22V21H19C18.45 21 18 20.55 18 20C18 19.45 18.45 19 19 19H20V18C20 17.45 20.45 17 21 17C21.55 17 22 17.45 22 18V19H23C23.55 19 24 19.45 24 20Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconDomainAddRounded };
ForwardRef.displayName = 'IconDomainAddRounded';
