import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M21 7H3C2.45 7 2 6.55 2 6C2 5.45 2.45 5 3 5H21C21.55 5 22 5.45 22 6C22 6.55 21.55 7 21 7ZM3 17H11C11.55 17 12 17.45 12 18C12 18.55 11.55 19 11 19H3C2.45 19 2 18.55 2 18C2 17.45 2.45 17 3 17ZM11 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H11C11.55 13 12 12.55 12 12C12 11.45 11.55 11 11 11ZM20.2178 18.6908C20.4175 18.8903 20.6771 19 20.9566 19L20.9466 18.99C21.2262 18.99 21.4858 18.8803 21.6855 18.6808C22.0949 18.2618 22.0949 17.6135 21.6855 17.2045L19.469 14.99L21.6855 12.7756C22.1048 12.3666 22.1048 11.7182 21.6855 11.2993C21.4858 11.1097 21.2262 11.01 20.9566 11.01C20.6871 11.01 20.4275 11.1097 20.2178 11.3092L18.0012 13.5237L15.7847 11.3092C15.585 11.1097 15.3254 11 15.0459 11C14.7663 11 14.5067 11.1097 14.307 11.3092C13.8977 11.7282 13.8977 12.3766 14.307 12.7855L16.5236 15L14.307 17.2145C13.8977 17.6334 13.8977 18.2818 14.307 18.6908C14.5067 18.8903 14.7663 19 15.0459 19C15.3254 19 15.585 18.8903 15.7847 18.6908L18.0012 16.4763L20.2178 18.6908Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconListEmpty };
ForwardRef.displayName = 'IconListEmpty';
