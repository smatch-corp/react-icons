import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 5H7V6C7 7.1 7.9 8 9 8H15C16.1 8 17 7.1 17 6V5H19V11H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H10V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z"
      fill="currentColor"
    />
    <path
      d="M12.2901 17.7095L14.8701 20.2895C15.2601 20.6795 15.8901 20.6795 16.2801 20.2895C16.6701 19.8995 16.6701 19.2695 16.2801 18.8795L15.4101 17.9995H20.5801C21.1301 17.9995 21.5801 17.5495 21.5801 16.9995C21.5801 16.4495 21.1301 15.9995 20.5801 15.9995H15.4101L16.2801 15.1195C16.6701 14.7295 16.6701 14.0995 16.2801 13.7095C15.8901 13.3195 15.2601 13.3195 14.8701 13.7095L12.2901 16.2895C11.9001 16.6895 11.9001 17.3195 12.2901 17.7095Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconProposalArrived };
ForwardRef.displayName = 'IconProposalArrived';
