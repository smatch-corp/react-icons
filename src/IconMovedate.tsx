import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_2010_16719)'>
      <path
        d='M21 12V6C21 4.9 20.1 4 19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H12V20H5V10H19V12H21ZM23.71 17.71L21.13 15.13C20.74 14.74 20.11 14.74 19.72 15.13C19.33 15.52 19.33 16.15 19.72 16.54L20.59 17.42H15.42C14.87 17.42 14.42 17.87 14.42 18.42C14.42 18.97 14.87 19.42 15.42 19.42H20.59L19.72 20.3C19.33 20.69 19.33 21.32 19.72 21.71C20.11 22.1 20.74 22.1 21.13 21.71L23.71 19.13C24.1 18.73 24.1 18.1 23.71 17.71Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_2010_16719'>
        <rect fill='currentColor' height={24} width={24} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconMovedate };
ForwardRef.displayName = 'IconMovedate';
