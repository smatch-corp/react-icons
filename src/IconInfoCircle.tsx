import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.1 2.09961C6.57998 2.09961 2.09998 6.57961 2.09998 12.0996C2.09998 17.6196 6.57998 22.0996 12.1 22.0996C17.62 22.0996 22.1 17.6196 22.1 12.0996C22.1 6.57961 17.62 2.09961 12.1 2.09961ZM12.1 20.0996C7.67998 20.0996 4.09998 16.5196 4.09998 12.0996C4.09998 7.67961 7.67998 4.09961 12.1 4.09961C16.52 4.09961 20.1 7.67961 20.1 12.0996C20.1 16.5196 16.52 20.0996 12.1 20.0996Z'
      fill='currentColor'
    />
    <path d='M13 7H11V9H13V7Z' fill='currentColor' />
    <path
      d='M12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconInfoCircle };
ForwardRef.displayName = 'IconInfoCircle';
