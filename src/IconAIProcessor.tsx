import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.71008 9.18945L7.58008 14.7995H9.17008L9.54008 13.7295H11.6401L12.0101 14.7995H13.6301L11.5001 9.18945H9.70008H9.71008ZM10.0201 12.3695L10.6001 10.7095L11.1701 12.3695H10.0201Z'
      fill='currentColor'
    />
    <path d='M15.5801 9.18945H14.0601V14.7995H15.5801V9.18945Z' fill='currentColor' />
    <path
      d='M22 8V6H20.45C20.22 4.57 18.99 3.48 17.5 3.48V2H15.5V3.48H14.5V2H12.5V3.48H11.5V2H9.5V3.48H8.5V2H6.5V3.48C5.01 3.48 3.78 4.58 3.55 6H2V8H3.5V9H2V11H3.5V12H2V14H3.5V15H2V17H3.5V17.48C3.5 19.14 4.84 20.48 6.5 20.48V22H8.5V20.48H9.5V22H11.5V20.48H12.5V22H14.5V20.48H15.5V22H17.5V20.48C19.16 20.48 20.5 19.14 20.5 17.48V17H22V15H20.5V14H22V12H20.5V11H22V9H20.5V8H22ZM18.5 17.48C18.5 18.03 18.05 18.48 17.5 18.48H6.5C5.95 18.48 5.5 18.03 5.5 17.48V6.48C5.5 5.93 5.95 5.48 6.5 5.48H17.5C18.05 5.48 18.5 5.93 18.5 6.48V17.48Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconAIProcessor };
ForwardRef.displayName = 'IconAIProcessor';
