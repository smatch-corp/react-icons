import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconSouthEastRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M18 8.99973C17.44 8.99973 17 9.44973 17 9.99973V15.5897L6.11998 4.69973C5.72998 4.30973 5.09998 4.30973 4.70998 4.69973C4.31998 5.08973 4.31998 5.71973 4.70998 6.10973L15.59 16.9997H9.99998C9.44998 16.9997 8.99998 17.4497 8.99998 17.9997C8.99998 18.5497 9.44998 18.9997 9.99998 18.9997H18C18.55 18.9997 19 18.5497 19 17.9997V9.99973C19 9.44973 18.55 8.99973 18 8.99973Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconSouthEastRounded);
export { ForwardRef as IconSouthEastRounded };
