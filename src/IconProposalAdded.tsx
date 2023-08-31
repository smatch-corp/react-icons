import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconProposalAdded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M5 5H7V6C7 7.1 7.9 8 9 8H15C16.1 8 17 7.1 17 6V5H19V10H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H10V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z"
            fill="currentColor"
        />
        <path
            d="M21.6 16.3098H18.3V13.0098C18.3 12.4598 17.85 12.0098 17.3 12.0098C16.75 12.0098 16.3 12.4598 16.3 13.0098V16.3098H13C12.45 16.3098 12 16.7598 12 17.3098C12 17.8598 12.45 18.3098 13 18.3098H16.3V21.6098C16.3 22.1598 16.75 22.6098 17.3 22.6098C17.85 22.6098 18.3 22.1598 18.3 21.6098V18.3098H21.6C22.15 18.3098 22.6 17.8598 22.6 17.3098C22.6 16.7598 22.15 16.3098 21.6 16.3098Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconProposalAdded);
export { ForwardRef as IconProposalAdded };
