import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconSteppers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M5 15C4.16667 15 3.45833 14.7083 2.875 14.125C2.29167 13.5417 2 12.8333 2 12C2 11.1667 2.29167 10.4583 2.875 9.875C3.45833 9.29167 4.16667 9 5 9C5.83333 9 6.54167 9.29167 7.125 9.875C7.70833 10.4583 8 11.1667 8 12C8 12.8333 7.70833 13.5417 7.125 14.125C6.54167 14.7083 5.83333 15 5 15ZM5 13C5.28333 13 5.52083 12.9042 5.7125 12.7125C5.90417 12.5208 6 12.2833 6 12C6 11.7167 5.90417 11.4792 5.7125 11.2875C5.52083 11.0958 5.28333 11 5 11C4.71667 11 4.47917 11.0958 4.2875 11.2875C4.09583 11.4792 4 11.7167 4 12C4 12.2833 4.09583 12.5208 4.2875 12.7125C4.47917 12.9042 4.71667 13 5 13ZM12 15C11.1667 15 10.4583 14.7083 9.875 14.125C9.29167 13.5417 9 12.8333 9 12C9 11.1667 9.29167 10.4583 9.875 9.875C10.4583 9.29167 11.1667 9 12 9C12.8333 9 13.5417 9.29167 14.125 9.875C14.7083 10.4583 15 11.1667 15 12C15 12.8333 14.7083 13.5417 14.125 14.125C13.5417 14.7083 12.8333 15 12 15ZM12 13C12.2833 13 12.5208 12.9042 12.7125 12.7125C12.9042 12.5208 13 12.2833 13 12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12C11 12.2833 11.0958 12.5208 11.2875 12.7125C11.4792 12.9042 11.7167 13 12 13ZM19 15C18.1667 15 17.4583 14.7083 16.875 14.125C16.2917 13.5417 16 12.8333 16 12C16 11.1667 16.2917 10.4583 16.875 9.875C17.4583 9.29167 18.1667 9 19 9C19.8333 9 20.5417 9.29167 21.125 9.875C21.7083 10.4583 22 11.1667 22 12C22 12.8333 21.7083 13.5417 21.125 14.125C20.5417 14.7083 19.8333 15 19 15Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconSteppers);
export { ForwardRef as IconSteppers };
