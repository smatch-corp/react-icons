import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M7.99999 18.9998C7.71665 18.9998 7.47915 18.904 7.28749 18.7123C7.09582 18.5206 6.99999 18.2831 6.99999 17.9998C6.99999 17.7165 7.09582 17.479 7.28749 17.2873C7.47915 17.0956 7.71665 16.9998 7.99999 16.9998H14.1C15.15 16.9998 16.0625 16.6665 16.8375 15.9998C17.6125 15.3331 18 14.4998 18 13.4998C18 12.4998 17.6125 11.6665 16.8375 10.9998C16.0625 10.3331 15.15 9.9998 14.1 9.9998H7.79999L9.69999 11.8998C9.88332 12.0831 9.97499 12.3165 9.97499 12.5998C9.97499 12.8831 9.88332 13.1165 9.69999 13.2998C9.51665 13.4831 9.28332 13.5748 8.99999 13.5748C8.71665 13.5748 8.48332 13.4831 8.29999 13.2998L4.69999 9.6998C4.59999 9.5998 4.52915 9.49147 4.48749 9.3748C4.44582 9.25814 4.42499 9.13314 4.42499 8.9998C4.42499 8.86647 4.44582 8.74147 4.48749 8.6248C4.52915 8.50814 4.59999 8.3998 4.69999 8.2998L8.29999 4.6998C8.48332 4.51647 8.71665 4.4248 8.99999 4.4248C9.28332 4.4248 9.51665 4.51647 9.69999 4.6998C9.88332 4.88314 9.97499 5.11647 9.97499 5.3998C9.97499 5.68314 9.88332 5.91647 9.69999 6.0998L7.79999 7.9998H14.1C15.7167 7.9998 17.1042 8.5248 18.2625 9.5748C19.4208 10.6248 20 11.9331 20 13.4998C20 15.0665 19.4208 16.3748 18.2625 17.4248C17.1042 18.4748 15.7167 18.9998 14.1 18.9998H7.99999Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconUndo);
export { ForwardRef as IconUndo };