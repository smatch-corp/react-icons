import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconKeyboardArrowRightRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M9.29006 15.8805L13.1701 12.0005L9.29006 8.12047C8.90006 7.73047 8.90006 7.10047 9.29006 6.71047C9.68006 6.32047 10.3101 6.32047 10.7001 6.71047L15.2901 11.3005C15.6801 11.6905 15.6801 12.3205 15.2901 12.7105L10.7001 17.3005C10.3101 17.6905 9.68006 17.6905 9.29006 17.3005C8.91006 16.9105 8.90006 16.2705 9.29006 15.8805Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconKeyboardArrowRightRounded);
export { ForwardRef as IconKeyboardArrowRightRounded };
