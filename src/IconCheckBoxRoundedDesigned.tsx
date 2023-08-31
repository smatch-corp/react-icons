import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconCheckBoxRoundedDesigned = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17.0002C19.2093 21 21.0002 19.2091 21.0002 17V7C21.0002 4.79086 19.2093 3 17.0002 3H7ZM18.0423 9.03084C18.3907 8.67633 18.3857 8.1065 18.0312 7.75809C17.6767 7.40969 17.1069 7.41464 16.7585 7.76916L10.3244 14.316L7.24216 11.1797C6.89375 10.8252 6.32392 10.8202 5.9694 11.1686C5.61488 11.517 5.60993 12.0869 5.95833 12.4414L9.68251 16.2308C9.85172 16.403 10.083 16.5 10.3244 16.5C10.5658 16.5 10.7971 16.403 10.9663 16.2308L18.0423 9.03084Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(IconCheckBoxRoundedDesigned);
export { ForwardRef as IconCheckBoxRoundedDesigned };
