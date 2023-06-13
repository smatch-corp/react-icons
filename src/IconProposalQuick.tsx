import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1339_6292)'>
      <path
        d='M19 19H14V21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V11H5V5H7V6C7 7.1 7.9 8 9 8H15C16.1 8 17 7.1 17 6V5H19V19ZM13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4Z'
        fill='currentColor'
      />
      <path
        d='M11 13H2.91998C2.3677 13 1.91998 13.4477 1.91998 14C1.91998 14.5523 2.3677 15 2.91998 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13Z'
        fill='currentColor'
      />
      <path
        d='M11 16H4.91998C4.3677 16 3.91998 16.4477 3.91998 17C3.91998 17.5523 4.3677 18 4.91998 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16Z'
        fill='currentColor'
      />
      <path
        d='M11 19H6.91998C6.3677 19 5.91998 19.4477 5.91998 20C5.91998 20.5523 6.3677 21 6.91998 21H11C11.5523 21 12 20.5523 12 20C12 19.4477 11.5523 19 11 19Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_1339_6292'>
        <rect fill='currentColor' height={24} width={24} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconProposalQuick };
ForwardRef.displayName = 'IconProposalQuick';
