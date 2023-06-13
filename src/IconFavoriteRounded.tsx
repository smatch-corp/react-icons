import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.35 20.1297C12.59 20.8197 11.42 20.8197 10.66 20.1197L10.55 20.0197C5.3 15.2697 1.87 12.1597 2 8.27968C2.06 6.57968 2.93 4.94968 4.34 3.98968C6.98 2.18968 10.24 3.02968 12 5.08968C13.76 3.02968 17.02 2.17968 19.66 3.98968C21.07 4.94968 21.94 6.57968 22 8.27968C22.14 12.1597 18.7 15.2697 13.45 20.0397L13.35 20.1297Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconFavoriteRounded };
ForwardRef.displayName = 'IconFavoriteRounded';
