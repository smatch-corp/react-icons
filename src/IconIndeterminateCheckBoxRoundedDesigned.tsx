import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconIndeterminateCheckBoxRoundedDesigned = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M21 7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7ZM16.125 13.125H7.875C7.2525 13.125 6.75 12.6225 6.75 12C6.75 11.3775 7.2525 10.875 7.875 10.875H16.125C16.7475 10.875 17.25 11.3775 17.25 12C17.25 12.6225 16.7475 13.125 16.125 13.125Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconIndeterminateCheckBoxRoundedDesigned);
export { ForwardRef as IconIndeterminateCheckBoxRoundedDesigned };
