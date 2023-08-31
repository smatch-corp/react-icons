import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconBoltRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M9 15.0003H5.9C5.5 15.0003 5.20417 14.8212 5.0125 14.4628C4.82083 14.1045 4.84167 13.7587 5.075 13.4253L12.55 2.67533C12.7167 2.442 12.9333 2.2795 13.2 2.18783C13.4667 2.09616 13.7417 2.10033 14.025 2.20033C14.3083 2.30033 14.5167 2.47533 14.65 2.72533C14.7833 2.97533 14.8333 3.242 14.8 3.52533L14 10.0003H17.875C18.3083 10.0003 18.6125 10.192 18.7875 10.5753C18.9625 10.9587 18.9083 11.317 18.625 11.6503L10.4 21.5003C10.2167 21.717 9.99167 21.8587 9.725 21.9253C9.45833 21.992 9.2 21.967 8.95 21.8503C8.7 21.7337 8.50417 21.5545 8.3625 21.3128C8.22083 21.0712 8.16667 20.8087 8.2 20.5253L9 15.0003Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconBoltRounded);
export { ForwardRef as IconBoltRounded };
