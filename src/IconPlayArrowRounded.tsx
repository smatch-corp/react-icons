import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 6.81976V17.1798C8 17.9698 8.87 18.4498 9.54 18.0198L17.68 12.8398C18.3 12.4498 18.3 11.5498 17.68 11.1498L9.54 5.97976C8.87 5.54976 8 6.02976 8 6.81976Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconPlayArrowRounded };
ForwardRef.displayName = 'IconPlayArrowRounded';
