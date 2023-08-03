import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.66 3.98968C17.02 2.18968 13.76 3.02968 12 5.08968C10.24 3.02968 6.97997 2.17968 4.33997 3.98968C2.93997 4.94968 2.05997 6.56968 1.99997 8.27968C1.85997 12.1597 5.29997 15.2697 10.55 20.0397L10.65 20.1297C11.41 20.8197 12.58 20.8197 13.34 20.1197L13.45 20.0197C18.7 15.2597 22.13 12.1497 22 8.26968C21.94 6.56968 21.06 4.94968 19.66 3.98968ZM12.1 18.5497L12 18.6497L11.9 18.5497C7.13997 14.2397 3.99997 11.3897 3.99997 8.49968C3.99997 6.49968 5.49997 4.99968 7.49997 4.99968C9.03997 4.99968 10.54 5.98968 11.07 7.35968H12.94C13.46 5.98968 14.96 4.99968 16.5 4.99968C18.5 4.99968 20 6.49968 20 8.49968C20 11.3897 16.86 14.2397 12.1 18.5497Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconFavoriteBorderRounded };
ForwardRef.displayName = 'IconFavoriteBorderRounded';
