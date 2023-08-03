import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 2.01953C6.49002 2.01953 2.02002 6.48953 2.02002 11.9995C2.02002 17.5095 6.49002 21.9795 12 21.9795C17.51 21.9795 21.98 17.5095 21.98 11.9995C21.98 6.48953 17.51 2.01953 12 2.01953ZM11.48 17.8795V13.7395H8.82002C8.45002 13.7395 8.20002 13.3395 8.38002 13.0095L12.06 5.83953C12.29 5.36953 13 5.53953 13 6.06953V10.2595H15.54C15.91 10.2595 16.15 10.6495 15.99 10.9795L12.43 18.0995C12.19 18.5795 11.48 18.4095 11.48 17.8795Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconOfflineBoltRounded };
ForwardRef.displayName = 'IconOfflineBoltRounded';
