import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.47 20.9997H19.53C21.07 20.9997 22.03 19.3297 21.26 17.9997L13.73 4.98969C12.96 3.65969 11.04 3.65969 10.27 4.98969L2.74 17.9997C1.97 19.3297 2.93 20.9997 4.47 20.9997ZM12 13.9997C11.45 13.9997 11 13.5497 11 12.9997V10.9997C11 10.4497 11.45 9.99969 12 9.99969C12.55 9.99969 13 10.4497 13 10.9997V12.9997C13 13.5497 12.55 13.9997 12 13.9997ZM13 17.9997H11V15.9997H13V17.9997Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconWarningRounded };
ForwardRef.displayName = 'IconWarningRounded';
