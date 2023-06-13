import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.27 6.77L15.23 2.73C14.76 2.26 14.13 2 13.46 2H6.5C5.12 2 4 3.12 4 4.5V19.5C4 20.88 5.12 22 6.5 22H17.5C18.88 22 20 20.88 20 19.5V8.54C20 7.87 19.74 7.25 19.27 6.77ZM18 19.5C18 19.78 17.78 20 17.5 20H6.5C6.22 20 6 19.78 6 19.5V4.5C6 4.22 6.22 4 6.5 4H13.47C13.6 4 13.73 4.05 13.82 4.15L17.85 8.19C17.94 8.28 18 8.41 18 8.54V19.5Z'
      fill='currentColor'
    />
    <path
      d='M14.62 11.7112H13.71V8.85125C13.71 8.54125 13.45 8.28125 13.14 8.28125H10.85C10.54 8.28125 10.28 8.54125 10.28 8.85125V11.7112H9.37C8.86 11.7112 8.6 12.3312 8.96 12.6912L11.58 15.3113C11.8 15.5312 12.16 15.5312 12.39 15.3113L15.01 12.6912C15.37 12.3312 15.12 11.7112 14.61 11.7112H14.62ZM8 17.4212C8 17.7312 8.26 17.9912 8.57 17.9912H15.43C15.74 17.9912 16 17.7312 16 17.4212C16 17.1112 15.74 16.8512 15.43 16.8512H8.57C8.26 16.8512 8 17.1112 8 17.4212Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconFiledown };
ForwardRef.displayName = 'IconFiledown';
