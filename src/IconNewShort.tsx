import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_3382_23513)'>
      <path
        d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM15.6 16.24H13.9L10.45 11.26H10.39V16.24H8.4V7.76H10.12L13.53 12.74H13.6V7.76H15.59V16.24H15.6Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_3382_23513'>
        <rect fill='currentColor' height={18} transform='translate(3 3)' width={18} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconNewShort };
ForwardRef.displayName = 'IconNewShort';
