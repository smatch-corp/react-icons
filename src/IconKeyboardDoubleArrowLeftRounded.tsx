import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.29 17.2905C18.68 16.9005 18.68 16.2705 18.29 15.8805L14.42 12.0005L18.3 8.12047C18.69 7.73047 18.69 7.10047 18.3 6.71047C17.91 6.32047 17.28 6.32047 16.89 6.71047L12.3 11.3005C11.91 11.6905 11.91 12.3205 12.3 12.7105L16.89 17.3005C17.27 17.6805 17.9 17.6805 18.29 17.2905Z"
      fill="currentColor"
    />
    <path
      d="M11.7 17.2905C12.09 16.9005 12.09 16.2705 11.7 15.8805L7.83 12.0005L11.71 8.12047C12.1 7.73047 12.1 7.10047 11.71 6.71047C11.32 6.32047 10.69 6.32047 10.3 6.71047L5.71 11.3005C5.32 11.6905 5.32 12.3205 5.71 12.7105L10.3 17.3005C10.68 17.6805 11.31 17.6805 11.7 17.2905Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardDoubleArrowLeftRounded };
ForwardRef.displayName = 'IconKeyboardDoubleArrowLeftRounded';
