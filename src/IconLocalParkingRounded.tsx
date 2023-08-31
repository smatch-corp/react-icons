import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconLocalParkingRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10 15V19C10 19.55 9.80417 20.0208 9.4125 20.4125C9.02083 20.8042 8.55 21 8 21C7.45 21 6.97917 20.8042 6.5875 20.4125C6.19583 20.0208 6 19.55 6 19V5C6 4.45 6.19583 3.97917 6.5875 3.5875C6.97917 3.19583 7.45 3 8 3H13C14.6667 3 16.0833 3.58333 17.25 4.75C18.4167 5.91667 19 7.33333 19 9C19 10.6667 18.4167 12.0833 17.25 13.25C16.0833 14.4167 14.6667 15 13 15H10ZM10 11H13.2C13.75 11 14.2208 10.8042 14.6125 10.4125C15.0042 10.0208 15.2 9.55 15.2 9C15.2 8.45 15.0042 7.97917 14.6125 7.5875C14.2208 7.19583 13.75 7 13.2 7H10V11Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconLocalParkingRounded);
export { ForwardRef as IconLocalParkingRounded };
