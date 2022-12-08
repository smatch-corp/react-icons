import { SVGProps, Ref, forwardRef } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.82 2.5 11.99 2.5C11.16 2.5 10.5 3.17 10.5 4V4.68C7.63001 5.36 6.00001 7.92 6.00001 11V16L4.70001 17.29C4.07001 17.92 4.51001 19 5.40001 19H18.57C19.46 19 19.91 17.92 19.28 17.29L18 16ZM11.99 22C13.09 22 13.99 21.1 13.99 20H9.99001C9.99001 21.1 10.88 22 11.99 22ZM6.77001 4.73C7.19001 4.35 7.20001 3.7 6.80001 3.3C6.42001 2.92 5.80001 2.91 5.41001 3.28C3.70001 4.84 2.52001 6.96 2.14001 9.34C2.05001 9.95 2.52001 10.5 3.14001 10.5C3.62001 10.5 4.04001 10.15 4.12001 9.67C4.42001 7.73 5.38001 6 6.77001 4.73ZM18.6 3.28C18.2 2.91 17.58 2.92 17.2 3.3C16.8 3.7 16.82 4.34 17.23 4.72C18.61 5.99 19.58 7.72 19.88 9.66C19.95 10.14 20.37 10.49 20.86 10.49C21.47 10.49 21.95 9.94 21.85 9.33C21.47 6.96 20.3 4.85 18.6 3.28Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(SvgComponent);
ForwardRef.displayName = 'IconNotificationsActiveRounded'; export { ForwardRef as IconNotificationsActiveRounded };