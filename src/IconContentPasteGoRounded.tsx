import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconContentPasteGoRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M5 5H7V6C7 7.1 7.9 8 9 8H15C16.1 8 17 7.1 17 6V5H19V11H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H10V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z"
            fill="currentColor"
        />
        <path
            d="M21.29 16.2905L18.71 13.7105C18.32 13.3205 17.69 13.3205 17.3 13.7105C16.91 14.1005 16.91 14.7305 17.3 15.1205L18.17 16.0005H13C12.45 16.0005 12 16.4505 12 17.0005C12 17.5505 12.45 18.0005 13 18.0005H18.17L17.3 18.8805C16.91 19.2705 16.91 19.9005 17.3 20.2905C17.69 20.6805 18.32 20.6805 18.71 20.2905L21.29 17.7105C21.68 17.3105 21.68 16.6805 21.29 16.2905Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconContentPasteGoRounded);
export { ForwardRef as IconContentPasteGoRounded };
