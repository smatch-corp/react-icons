import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconLMComment = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            clipRule="evenodd"
            d="M20 6.5C20 6.22 19.78 6 19.5 6H4.5C4.22 6 4 6.22 4 6.5V15.5C4 15.78 4.22 16 4.5 16H13.91L14.51 16.68L16 18.39V16H19.5C19.78 16 20 15.78 20 15.5V6.5ZM4.5 4H19.5C20.88 4 22 5.12 22 6.5V15.5C22 16.88 20.88 18 19.5 18H18V21.5C18 21.78 17.78 22 17.5 22H16.73C16.58 22 16.44 21.94 16.35 21.83L13 18H4.5C3.12 18 2 16.88 2 15.5V6.5C2 5.12 3.12 4 4.5 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11ZM12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12ZM17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(IconLMComment);
export { ForwardRef as IconLMComment };
