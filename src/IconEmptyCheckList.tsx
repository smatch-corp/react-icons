import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_3579_28127)">
      <path
        clipRule="evenodd"
        d="M19 3C20.1 3 21 3.9 21 5V15.04H16.04C15.49 15.04 15.04 15.49 15.04 16.04V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19ZM10.71 16.29L18.29 8.7C18.68 8.31 18.68 7.68 18.29 7.29C17.9 6.9 17.27 6.9 16.88 7.29L10 14.17L7.12 11.29C6.73 10.9 6.1 10.9 5.71 11.29C5.32 11.68 5.32 12.31 5.71 12.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29ZM22.85 17.9L20.73 20.02L22.85 22.14C23.05 22.34 23.05 22.65 22.85 22.85C22.65 23.05 22.34 23.05 22.14 22.85L20.02 20.73L17.9 22.85C17.7 23.05 17.39 23.05 17.19 22.85C16.99 22.65 16.99 22.34 17.19 22.14L19.31 20.02L17.19 17.9C16.99 17.7 16.99 17.39 17.19 17.19C17.39 16.99 17.7 16.99 17.9 17.19L20.02 19.31L22.14 17.19C22.34 17 22.65 17 22.85 17.19C23.05 17.39 23.05 17.7 22.85 17.9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_3579_28127">
        <rect fill="currentColor" height={24} width={24} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconEmptyCheckList };
ForwardRef.displayName = 'IconEmptyCheckList';
