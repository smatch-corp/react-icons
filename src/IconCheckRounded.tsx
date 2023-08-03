import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.99989 16.1703L5.52989 12.7003C5.13989 12.3103 4.50989 12.3103 4.11989 12.7003C3.72989 13.0903 3.72989 13.7203 4.11989 14.1103L8.29989 18.2903C8.68989 18.6803 9.31989 18.6803 9.70989 18.2903L20.2899 7.71031C20.6799 7.32031 20.6799 6.69031 20.2899 6.30031C19.8999 5.91031 19.2699 5.91031 18.8799 6.30031L8.99989 16.1703Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconCheckRounded };
ForwardRef.displayName = 'IconCheckRounded';
