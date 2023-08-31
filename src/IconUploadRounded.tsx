import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconUploadRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M6 19.9998C5.45 19.9998 4.97917 19.804 4.5875 19.4123C4.19583 19.0206 4 18.5498 4 17.9998V15.9998C4 15.7165 4.09583 15.479 4.2875 15.2873C4.47917 15.0956 4.71667 14.9998 5 14.9998C5.28333 14.9998 5.52083 15.0956 5.7125 15.2873C5.90417 15.479 6 15.7165 6 15.9998V17.9998H18V15.9998C18 15.7165 18.0958 15.479 18.2875 15.2873C18.4792 15.0956 18.7167 14.9998 19 14.9998C19.2833 14.9998 19.5208 15.0956 19.7125 15.2873C19.9042 15.479 20 15.7165 20 15.9998V17.9998C20 18.5498 19.8042 19.0206 19.4125 19.4123C19.0208 19.804 18.55 19.9998 18 19.9998H6ZM11 7.8498L9.125 9.7248C8.925 9.9248 8.6875 10.0206 8.4125 10.0123C8.1375 10.004 7.9 9.8998 7.7 9.6998C7.51667 9.4998 7.42083 9.26647 7.4125 8.9998C7.40417 8.73314 7.5 8.4998 7.7 8.2998L11.3 4.6998C11.4 4.5998 11.5083 4.52897 11.625 4.4873C11.7417 4.44564 11.8667 4.4248 12 4.4248C12.1333 4.4248 12.2583 4.44564 12.375 4.4873C12.4917 4.52897 12.6 4.5998 12.7 4.6998L16.3 8.2998C16.5 8.4998 16.5958 8.73314 16.5875 8.9998C16.5792 9.26647 16.4833 9.4998 16.3 9.6998C16.1 9.8998 15.8625 10.004 15.5875 10.0123C15.3125 10.0206 15.075 9.9248 14.875 9.7248L13 7.8498V14.9998C13 15.2831 12.9042 15.5206 12.7125 15.7123C12.5208 15.904 12.2833 15.9998 12 15.9998C11.7167 15.9998 11.4792 15.904 11.2875 15.7123C11.0958 15.5206 11 15.2831 11 14.9998V7.8498Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconUploadRounded);
export { ForwardRef as IconUploadRounded };