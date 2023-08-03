import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.47012 20.9997H19.5301C21.0701 20.9997 22.0301 19.3297 21.2601 17.9997L13.7301 4.98969C12.9601 3.65969 11.0401 3.65969 10.2701 4.98969L2.74012 17.9997C1.97012 19.3297 2.93012 20.9997 4.47012 20.9997ZM12.0001 13.9997C11.4501 13.9997 11.0001 13.5497 11.0001 12.9997V10.9997C11.0001 10.4497 11.4501 9.99969 12.0001 9.99969C12.5501 9.99969 13.0001 10.4497 13.0001 10.9997V12.9997C13.0001 13.5497 12.5501 13.9997 12.0001 13.9997ZM13.0001 17.9997H11.0001V15.9997H13.0001V17.9997Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconWarningRounded };
ForwardRef.displayName = 'IconWarningRounded';
