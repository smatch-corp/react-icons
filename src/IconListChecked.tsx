import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M21 7H3C2.45 7 2 6.55 2 6C2 5.45 2.45 5 3 5H21C21.55 5 22 5.45 22 6C22 6.55 21.55 7 21 7ZM3 17H11C11.55 17 12 17.45 12 18C12 18.55 11.55 19 11 19H3C2.45 19 2 18.55 2 18C2 17.45 2.45 17 3 17ZM11 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H11C11.55 13 12 12.55 12 12C12 11.45 11.55 11 11 11ZM16 17.8604C16.18 18.0404 16.42 18.1404 16.67 18.1404H16.68C16.93 18.1404 17.17 18.0404 17.35 17.8604L21.73 13.4804C21.91 13.3004 22.01 13.0704 22.01 12.8104C22.01 12.5504 21.91 12.3204 21.73 12.1404C21.55 11.9604 21.31 11.8604 21.06 11.8604C20.81 11.8604 20.57 11.9604 20.39 12.1404L16.67 15.8504L15.61 14.7904C15.43 14.6104 15.19 14.5104 14.94 14.5104C14.69 14.5104 14.45 14.6104 14.27 14.7904C14.09 14.9704 13.99 15.2004 13.99 15.4604C13.99 15.7204 14.09 15.9504 14.27 16.1304L16 17.8604Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconListChecked };
ForwardRef.displayName = 'IconListChecked';
