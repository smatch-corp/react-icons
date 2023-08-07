import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 4.99954V3.20954C12 2.75954 11.46 2.53954 11.15 2.85954L8.35 5.64954C8.15 5.84954 8.15 6.15954 8.35 6.35954L11.14 9.14954C11.46 9.45954 12 9.23954 12 8.78954V6.99954C15.31 6.99954 18 9.68954 18 12.9995C18 15.7195 16.17 18.0195 13.69 18.7495C13.27 18.8695 13 19.2695 13 19.6995C13 20.3495 13.62 20.8595 14.25 20.6695C17.57 19.6995 20 16.6395 20 12.9995C20 8.57954 16.42 4.99954 12 4.99954Z"
      fill="currentColor"
    />
    <path
      d="M6 12.9991C6 11.6591 6.44 10.4191 7.19 9.40911C7.49 9.00911 7.45 8.45911 7.1 8.09911C6.68 7.67911 5.96 7.71911 5.6 8.19911C4.6 9.53911 4 11.1991 4 12.9991C4 16.6391 6.43 19.6991 9.75 20.6691C10.38 20.8591 11 20.3491 11 19.6991C11 19.2691 10.73 18.8691 10.31 18.7491C7.83 18.0191 6 15.7191 6 12.9991Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconRestartAltRounded };
ForwardRef.displayName = 'IconRestartAltRounded';
