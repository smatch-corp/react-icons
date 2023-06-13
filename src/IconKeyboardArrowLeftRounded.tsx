import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.71 15.8805L10.83 12.0005L14.71 8.12047C15.1 7.73047 15.1 7.10047 14.71 6.71047C14.32 6.32047 13.69 6.32047 13.3 6.71047L8.71 11.3005C8.32 11.6905 8.32 12.3205 8.71 12.7105L13.3 17.3005C13.69 17.6905 14.32 17.6905 14.71 17.3005C15.09 16.9105 15.1 16.2705 14.71 15.8805Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardArrowLeftRounded };
ForwardRef.displayName = 'IconKeyboardArrowLeftRounded';
