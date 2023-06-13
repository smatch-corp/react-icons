import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20.99 17.9898L16.05 13.0498L13.93 15.1698L18.87 20.1098C19.46 20.6998 20.41 20.6998 20.99 20.1098C21.57 19.5198 21.57 18.5698 20.99 17.9898Z"
      fill="currentColor"
    />
    <path
      d="M17.65 9.9998C19.58 9.9998 21.15 8.4298 21.15 6.4998C21.15 5.9198 20.99 5.3798 20.74 4.8998L18.04 7.5998L16.55 6.1098L19.25 3.4098C18.77 3.1598 18.23 2.9998 17.65 2.9998C15.72 2.9998 14.15 4.5698 14.15 6.4998C14.15 6.9098 14.23 7.2998 14.36 7.6598L12.51 9.5098L10.73 7.7298C11.12 7.3398 11.12 6.70981 10.73 6.3198L10.02 5.6098L12.14 3.4898C10.97 2.3198 9.07 2.3198 7.9 3.4898L5.08 6.3198C4.69 6.70981 4.69 7.3398 5.08 7.7298L5.79 8.4398H3.25C3.06 8.4398 2.88 8.5098 2.75 8.6498C2.47 8.9298 2.47 9.3698 2.75 9.6498L5.29 12.1898C5.57 12.4698 6.01 12.4698 6.29 12.1898C6.42 12.0598 6.5 11.8798 6.5 11.6898V9.1498L7.2 9.8498C7.59 10.2398 8.22 10.2398 8.61 9.8498L10.39 11.6298L4.04 17.9798C3.45 18.5698 3.45 19.5198 4.04 20.0998C4.63 20.6898 5.58 20.6898 6.16 20.0998L16.48 9.7898C16.85 9.9198 17.24 9.9998 17.65 9.9998Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconConstructionRounded };
ForwardRef.displayName = 'IconConstructionRounded';
