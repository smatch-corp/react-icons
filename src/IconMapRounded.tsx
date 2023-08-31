import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconMapRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M14.35 20.775L9 18.9L4.35 20.7C4.01667 20.8333 3.70833 20.7958 3.425 20.5875C3.14167 20.3791 3 20.1 3 19.75V5.74996C3 5.5333 3.0625 5.34163 3.1875 5.17496C3.3125 5.0083 3.48333 4.8833 3.7 4.79996L8.35 3.22496C8.56667 3.1583 8.78333 3.1208 9 3.11246C9.21667 3.10413 9.43333 3.14163 9.65 3.22496L15 5.09996L19.65 3.29996C19.9833 3.16663 20.2917 3.20413 20.575 3.41246C20.8583 3.6208 21 3.89996 21 4.24996V18.25C21 18.4666 20.9375 18.6583 20.8125 18.825C20.6875 18.9916 20.5167 19.1166 20.3 19.2L15.65 20.775C15.4333 20.8416 15.2167 20.8791 15 20.8875C14.7833 20.8958 14.5667 20.8583 14.35 20.775ZM14 18.55V6.84996L10 5.44996V17.15L14 18.55Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconMapRounded);
export { ForwardRef as IconMapRounded };
