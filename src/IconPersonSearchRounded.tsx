import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z"
      fill="currentColor"
    />
    <path
      d="M10.35 14.01C7.62 13.91 2 15.27 2 18V19C2 19.55 2.45 20 3 20H11.54C9.07 17.24 10.31 14.11 10.35 14.01Z"
      fill="currentColor"
    />
    <path
      d="M19.4301 18.0195C19.9001 17.2195 20.1301 16.2495 19.9101 15.1995C19.5701 13.5595 18.1901 12.2495 16.5301 12.0395C13.9001 11.6995 11.6801 13.9095 12.0301 16.5395C12.2501 18.1995 13.5501 19.5795 15.1901 19.9195C16.2401 20.1395 17.2101 19.9095 18.0101 19.4395L19.8701 21.2995C20.2601 21.6895 20.8901 21.6895 21.2801 21.2995C21.6701 20.9095 21.6701 20.2795 21.2801 19.8895L19.4301 18.0195ZM16.0001 17.9995C14.9001 17.9995 14.0001 17.0995 14.0001 15.9995C14.0001 14.8995 14.9001 13.9995 16.0001 13.9995C17.1001 13.9995 18.0001 14.8995 18.0001 15.9995C18.0001 17.0995 17.1001 17.9995 16.0001 17.9995Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconPersonSearchRounded };
ForwardRef.displayName = 'IconPersonSearchRounded';
