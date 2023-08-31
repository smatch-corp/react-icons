import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconVisibilityRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.68334 19 7.56667 18.3875 5.65 17.1625C3.73334 15.9375 2.28334 14.2833 1.3 12.2C1.25 12.1167 1.21667 12.0125 1.2 11.8875C1.18334 11.7625 1.175 11.6333 1.175 11.5C1.175 11.3667 1.18334 11.2375 1.2 11.1125C1.21667 10.9875 1.25 10.8833 1.3 10.8C2.28334 8.71667 3.73334 7.0625 5.65 5.8375C7.56667 4.6125 9.68334 4 12 4C14.3167 4 16.4333 4.6125 18.35 5.8375C20.2667 7.0625 21.7167 8.71667 22.7 10.8C22.75 10.8833 22.7833 10.9875 22.8 11.1125C22.8167 11.2375 22.825 11.3667 22.825 11.5C22.825 11.6333 22.8167 11.7625 22.8 11.8875C22.7833 12.0125 22.75 12.1167 22.7 12.2C21.7167 14.2833 20.2667 15.9375 18.35 17.1625C16.4333 18.3875 14.3167 19 12 19Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconVisibilityRounded);
export { ForwardRef as IconVisibilityRounded };
