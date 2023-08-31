import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconPDFFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill="none"
        height="1em"
        ref={ref}
        viewBox="0 0 24 24"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            clipRule="evenodd"
            d="M15.23 2.73L19.27 6.77C19.74 7.25 20 7.87 20 8.54V19.5C20 20.88 18.88 22 17.5 22H6.5C5.12 22 4 20.88 4 19.5V17.75H6V19.5C6 19.78 6.22 20 6.5 20H17.5C17.78 20 18 19.78 18 19.5V8.54C18 8.41 17.94 8.28 17.85 8.19L13.82 4.15C13.73 4.05 13.6 4 13.47 4H6.5C6.22 4 6 4.22 6 4.5V8.95H4V4.5C4 3.12 5.12 2 6.5 2H13.46C14.13 2 14.76 2.26 15.23 2.73ZM4 15.7502H5.17V14.2302H5.94C7.03 14.2302 7.6 13.5802 7.6 12.6002C7.6 11.6202 7.03 10.9502 5.93 10.9502H4V15.7502ZM5.91 13.1002H5.17V12.1202H5.91C6.19 12.1202 6.41 12.2902 6.41 12.6102C6.41 12.9302 6.2 13.1002 5.91 13.1002ZM9.95004 15.7497C11.3 15.7497 12.19 14.8097 12.19 13.3597C12.19 11.9197 11.29 10.9697 9.95004 10.9697H8.04004V15.7497H9.95004ZM9.92004 14.5697H9.21004V14.5597V12.1597H9.92004C10.62 12.1597 10.97 12.6597 10.97 13.3597C10.97 14.0597 10.63 14.5697 9.92004 14.5697ZM13.82 14.0102V15.7502H12.65V10.9502H16V12.1102H13.82V12.8502H15.84V14.0102H13.82Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(IconPDFFile);
export { ForwardRef as IconPDFFile };
