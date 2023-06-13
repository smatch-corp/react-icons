import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 2C7.8 2 4 5.22 4 10.2C4 13.38 6.45 17.12 11.34 21.43C11.72 21.76 12.29 21.76 12.67 21.43C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2ZM10.23 12.66L8.82 11.25C8.43 10.86 8.43 10.23 8.82 9.84C9.21 9.45 9.84 9.45 10.23 9.84L10.94 10.55L13.77 7.72C14.16 7.33 14.79 7.33 15.18 7.72C15.57 8.11 15.57 8.74 15.18 9.13L11.64 12.67C11.26 13.05 10.62 13.05 10.23 12.66Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconWheretoVoteRounded };
ForwardRef.displayName = 'IconWheretoVoteRounded';
