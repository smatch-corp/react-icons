import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.3499 20.1297C12.5899 20.8197 11.4199 20.8197 10.6599 20.1197L10.5499 20.0197C5.29991 15.2697 1.86991 12.1597 1.99991 8.27968C2.05991 6.57968 2.92991 4.94968 4.33991 3.98968C6.97991 2.18968 10.2399 3.02968 11.9999 5.08968C13.7599 3.02968 17.0199 2.17968 19.6599 3.98968C21.0699 4.94968 21.9399 6.57968 21.9999 8.27968C22.1399 12.1597 18.6999 15.2697 13.4499 20.0397L13.3499 20.1297Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconFavoriteRounded };
ForwardRef.displayName = 'IconFavoriteRounded';
