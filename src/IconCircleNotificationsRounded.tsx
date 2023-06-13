import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C11.17 18.5 10.5 17.83 10.5 17H13.5C13.5 17.83 12.83 18.5 12 18.5ZM16 16H8C7.45 16 7 15.55 7 15C7 14.45 7.45 14 8 14V11C8 9.14 9.28 7.59 11 7.14V6.5C11 5.95 11.45 5.5 12 5.5C12.55 5.5 13 5.95 13 6.5V7.14C14.72 7.59 16 9.14 16 11V14C16.55 14 17 14.45 17 15C17 15.55 16.55 16 16 16Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconCircleNotificationsRounded };
ForwardRef.displayName = 'IconCircleNotificationsRounded';
