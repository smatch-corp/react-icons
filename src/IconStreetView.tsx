import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconStreetView = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M5 9.48503C5 5.62238 8.13859 2.5 12 2.5C15.8709 2.5 19 5.62238 19 9.48503C19 13.3477 15.8709 16.4701 12 16.4701C8.12908 16.4701 5 13.3477 5 9.48503ZM9.61277 9.48503C9.61277 10.7947 10.678 11.8672 12 11.8672C13.3125 11.8672 14.3872 10.7947 14.3872 9.48503C14.3872 8.17533 13.3125 7.10291 12 7.10291C10.6875 7.10291 9.61277 8.17533 9.61277 9.48503ZM11.9913 17.4329C13.2928 17.4329 14.5278 17.1106 15.6203 16.5513H15.6393C16.1333 16.2953 16.7223 16.6745 16.7223 17.2338V18.7032C16.7223 19.8786 15.9243 20.9025 14.7843 21.1774C13.8913 21.3859 12.9603 21.4997 12.0008 21.4997C11.0413 21.4997 10.1103 21.3859 9.2173 21.1774C8.0773 20.9025 7.2793 19.8786 7.2793 18.5231V17.2338C7.2793 16.6745 7.8683 16.2953 8.3623 16.5513C9.4453 17.1106 10.6898 17.4329 11.9913 17.4329Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(IconStreetView);
export { ForwardRef as IconStreetView };
