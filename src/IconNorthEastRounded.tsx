import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconNorthEastRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M9 6C9 6.56 9.45 7 10 7H15.59L4.7 17.89C4.31 18.28 4.31 18.91 4.7 19.3C5.09 19.69 5.72 19.69 6.11 19.3L17 8.41V14C17 14.55 17.45 15 18 15C18.55 15 19 14.55 19 14V6C19 5.45 18.55 5 18 5H10C9.45 5 9 5.45 9 6Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconNorthEastRounded);
export { ForwardRef as IconNorthEastRounded };
