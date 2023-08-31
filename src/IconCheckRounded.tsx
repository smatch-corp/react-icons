import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconCheckRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M9.55002 15.15L18.025 6.675C18.225 6.475 18.4625 6.375 18.7375 6.375C19.0125 6.375 19.25 6.475 19.45 6.675C19.65 6.875 19.75 7.1125 19.75 7.3875C19.75 7.6625 19.65 7.9 19.45 8.1L10.25 17.3C10.05 17.5 9.81669 17.6 9.55002 17.6C9.28336 17.6 9.05002 17.5 8.85002 17.3L4.55002 13C4.35002 12.8 4.25419 12.5625 4.26252 12.2875C4.27086 12.0125 4.37502 11.775 4.57502 11.575C4.77502 11.375 5.01252 11.275 5.28752 11.275C5.56252 11.275 5.80002 11.375 6.00002 11.575L9.55002 15.15Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconCheckRounded);
export { ForwardRef as IconCheckRounded };
