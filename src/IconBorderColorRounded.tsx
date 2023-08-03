import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20 23.9996H4C2.9 23.9996 2 23.0996 2 21.9996C2 20.8996 2.9 19.9996 4 19.9996H20C21.1 19.9996 22 20.8996 22 21.9996C22 23.0996 21.1 23.9996 20 23.9996ZM13.06 5.18957L16.81 8.93957L8.04 17.7096C7.86 17.8996 7.6 17.9996 7.34 17.9996H5C4.45 17.9996 4 17.5496 4 16.9996V14.6596C4 14.3896 4.11 14.1396 4.29 13.9496L13.06 5.18957ZM17.88 7.86957L14.13 4.11957L15.96 2.28957C16.35 1.89957 16.98 1.89957 17.37 2.28957L19.71 4.62957C20.1 5.01957 20.1 5.64957 19.71 6.03957L17.88 7.86957Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconBorderColorRounded };
ForwardRef.displayName = 'IconBorderColorRounded';
