import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconListEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M21 7H3C2.45 7 2 6.55 2 6C2 5.45 2.45 5 3 5H21C21.55 5 22 5.45 22 6C22 6.55 21.55 7 21 7ZM3 17H11C11.55 17 12 17.45 12 18C12 18.55 11.55 19 11 19H3C2.45 19 2 18.55 2 18C2 17.45 2.45 17 3 17ZM11 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H11C11.55 13 12 12.55 12 12C12 11.45 11.55 11 11 11ZM20.57 11.39L21.59 12.41C22.11 12.92 22.11 13.77 21.59 14.29L16.89 18.99H14.43C14.19 18.99 13.99 18.8 13.99 18.55V16.09L18.69 11.39C19.2 10.87 20.05 10.87 20.57 11.39ZM15.37 17.61H16.28L19.34 14.55L18.43 13.64L15.37 16.7V17.61Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(IconListEdit);
export { ForwardRef as IconListEdit };
