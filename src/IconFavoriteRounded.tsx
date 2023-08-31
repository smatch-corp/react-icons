import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconFavoriteRounded = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M12 20.3254C11.7667 20.3254 11.5292 20.2837 11.2875 20.2004C11.0458 20.1171 10.8333 19.9837 10.65 19.8004L8.925 18.2254C7.15833 16.6087 5.5625 15.0046 4.1375 13.4129C2.7125 11.8212 2 10.0671 2 8.15039C2 6.58372 2.525 5.27539 3.575 4.22539C4.625 3.17539 5.93333 2.65039 7.5 2.65039C8.38333 2.65039 9.21667 2.83789 10 3.21289C10.7833 3.58789 11.45 4.10039 12 4.75039C12.55 4.10039 13.2167 3.58789 14 3.21289C14.7833 2.83789 15.6167 2.65039 16.5 2.65039C18.0667 2.65039 19.375 3.17539 20.425 4.22539C21.475 5.27539 22 6.58372 22 8.15039C22 10.0671 21.2917 11.8254 19.875 13.4254C18.4583 15.0254 16.85 16.6337 15.05 18.2504L13.35 19.8004C13.1667 19.9837 12.9542 20.1171 12.7125 20.2004C12.4708 20.2837 12.2333 20.3254 12 20.3254Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(IconFavoriteRounded);
export { ForwardRef as IconFavoriteRounded };
