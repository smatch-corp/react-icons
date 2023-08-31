import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconEventAvailableRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10.95 15.45L14.425 11.975C14.625 11.775 14.8667 11.675 15.15 11.675C15.4333 11.675 15.675 11.775 15.875 11.975C16.075 12.175 16.175 12.4167 16.175 12.7C16.175 12.9833 16.075 13.225 15.875 13.425L11.65 17.65C11.45 17.85 11.2167 17.95 10.95 17.95C10.6833 17.95 10.45 17.85 10.25 17.65L8.125 15.525C7.925 15.325 7.825 15.0833 7.825 14.8C7.825 14.5167 7.925 14.275 8.125 14.075C8.325 13.875 8.56667 13.775 8.85 13.775C9.13333 13.775 9.375 13.875 9.575 14.075L10.95 15.45ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V3C6 2.71667 6.09583 2.47917 6.2875 2.2875C6.47917 2.09583 6.71667 2 7 2C7.28333 2 7.52083 2.09583 7.7125 2.2875C7.90417 2.47917 8 2.71667 8 3V4H16V3C16 2.71667 16.0958 2.47917 16.2875 2.2875C16.4792 2.09583 16.7167 2 17 2C17.2833 2 17.5208 2.09583 17.7125 2.2875C17.9042 2.47917 18 2.71667 18 3V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconEventAvailableRounded);
export { ForwardRef as IconEventAvailableRounded };
