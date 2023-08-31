import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconLocationCityRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M15 11.0005V5.83047C15 5.30047 14.79 4.79047 14.41 4.42047L12.7 2.71047C12.31 2.32047 11.68 2.32047 11.29 2.71047L9.59 4.41047C9.21 4.79047 9 5.30047 9 5.83047V7.00047H5C3.9 7.00047 3 7.90047 3 9.00047V19.0005C3 20.1005 3.9 21.0005 5 21.0005H19C20.1 21.0005 21 20.1005 21 19.0005V13.0005C21 11.9005 20.1 11.0005 19 11.0005H15ZM7 19.0005H5V17.0005H7V19.0005ZM7 15.0005H5V13.0005H7V15.0005ZM7 11.0005H5V9.00047H7V11.0005ZM13 19.0005H11V17.0005H13V19.0005ZM13 15.0005H11V13.0005H13V15.0005ZM13 11.0005H11V9.00047H13V11.0005ZM13 7.00047H11V5.00047H13V7.00047ZM19 19.0005H17V17.0005H19V19.0005ZM19 15.0005H17V13.0005H19V15.0005Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconLocationCityRounded);
export { ForwardRef as IconLocationCityRounded };
