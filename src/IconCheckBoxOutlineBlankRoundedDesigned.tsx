import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconCheckBoxOutlineBlankRoundedDesigned = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M17 21H7C4.79 21 3 19.21 3 17V7C3 4.79 4.79 3 7 3H17C19.21 3 21 4.79 21 7V17C21 19.21 19.21 21 17 21ZM7 5C5.9 5 5 5.9 5 7V17C5 18.1 5.9 19 7 19H17C18.1 19 19 18.1 19 17V7C19 5.9 18.1 5 17 5H7Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconCheckBoxOutlineBlankRoundedDesigned);
export { ForwardRef as IconCheckBoxOutlineBlankRoundedDesigned };
