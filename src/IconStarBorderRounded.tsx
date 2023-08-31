import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconStarBorderRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8.85 17.8252L12 15.9252L15.15 17.8502L14.325 14.2502L17.1 11.8502L13.45 11.5252L12 8.1252L10.55 11.5002L6.9 11.8252L9.675 14.2502L8.85 17.8252ZM12 18.2752L7.85 20.7752C7.66667 20.8919 7.475 20.9419 7.275 20.9252C7.075 20.9085 6.9 20.8419 6.75 20.7252C6.6 20.6085 6.48333 20.4627 6.4 20.2877C6.31667 20.1127 6.3 19.9169 6.35 19.7002L7.45 14.9752L3.775 11.8002C3.60833 11.6502 3.50417 11.4794 3.4625 11.2877C3.42083 11.096 3.43333 10.9085 3.5 10.7252C3.56667 10.5419 3.66667 10.3919 3.8 10.2752C3.93333 10.1585 4.11667 10.0835 4.35 10.0502L9.2 9.6252L11.075 5.1752C11.1583 4.9752 11.2875 4.8252 11.4625 4.7252C11.6375 4.6252 11.8167 4.5752 12 4.5752C12.1833 4.5752 12.3625 4.6252 12.5375 4.7252C12.7125 4.8252 12.8417 4.9752 12.925 5.1752L14.8 9.6252L19.65 10.0502C19.8833 10.0835 20.0667 10.1585 20.2 10.2752C20.3333 10.3919 20.4333 10.5419 20.5 10.7252C20.5667 10.9085 20.5792 11.096 20.5375 11.2877C20.4958 11.4794 20.3917 11.6502 20.225 11.8002L16.55 14.9752L17.65 19.7002C17.7 19.9169 17.6833 20.1127 17.6 20.2877C17.5167 20.4627 17.4 20.6085 17.25 20.7252C17.1 20.8419 16.925 20.9085 16.725 20.9252C16.525 20.9419 16.3333 20.8919 16.15 20.7752L12 18.2752Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconStarBorderRounded);
export { ForwardRef as IconStarBorderRounded };
