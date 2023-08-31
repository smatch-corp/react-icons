import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconImageNotSupportedRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M21.19 21.1901L20.41 20.4101L18 18.0001L13.41 13.4101L3.59 3.59008L2.81 2.81008C2.42 2.42008 1.79 2.42008 1.4 2.81008C1 3.20008 1 3.83008 1.39 4.22008L3 5.83008V19.0001C3 20.1001 3.9 21.0001 5 21.0001H18.17L19.78 22.6101C20.17 23.0001 20.8 23.0001 21.19 22.6101C21.58 22.2201 21.58 21.5801 21.19 21.1901ZM6.02 18.0001C5.6 18.0001 5.37 17.5201 5.63 17.1901L8.12 13.9901C8.32 13.7401 8.7 13.7301 8.9 13.9801L11 16.5101L12.17 15.0001L15.17 18.0001H6.02ZM21 18.1701L5.83 3.00008H19C20.1 3.00008 21 3.90008 21 5.00008V18.1701Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconImageNotSupportedRounded);
export { ForwardRef as IconImageNotSupportedRounded };
