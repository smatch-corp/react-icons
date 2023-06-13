import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.3 5.70973C17.91 5.31973 17.28 5.31973 16.89 5.70973L12 10.5897L7.11 5.69973C6.72 5.30973 6.09 5.30973 5.7 5.69973C5.31 6.08973 5.31 6.71973 5.7 7.10973L10.59 11.9997L5.7 16.8897C5.31 17.2797 5.31 17.9097 5.7 18.2997C6.09 18.6897 6.72 18.6897 7.11 18.2997L12 13.4097L16.89 18.2997C17.28 18.6897 17.91 18.6897 18.3 18.2997C18.69 17.9097 18.69 17.2797 18.3 16.8897L13.41 11.9997L18.3 7.10973C18.68 6.72973 18.68 6.08973 18.3 5.70973Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconCloseRounded };
ForwardRef.displayName = 'IconCloseRounded';
