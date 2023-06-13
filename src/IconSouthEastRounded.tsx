import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18 8.99973C17.44 8.99973 17 9.44973 17 9.99973V15.5897L6.12001 4.69973C5.73001 4.30973 5.10001 4.30973 4.71001 4.69973C4.32001 5.08973 4.32001 5.71973 4.71001 6.10973L15.59 16.9997H10C9.45001 16.9997 9.00001 17.4497 9.00001 17.9997C9.00001 18.5497 9.45001 18.9997 10 18.9997H18C18.55 18.9997 19 18.5497 19 17.9997V9.99973C19 9.44973 18.55 8.99973 18 8.99973Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconSouthEastRounded };
ForwardRef.displayName = 'IconSouthEastRounded';
