import { SVGProps, Ref, forwardRef } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z" fill="currentColor" /><path d="M10.35 14.01C7.62 13.91 2 15.27 2 18V19C2 19.55 2.45 20 3 20H11.54C9.07 17.24 10.31 14.11 10.35 14.01Z" fill="currentColor" /><path d="M19.43 18.0195C19.9 17.2195 20.13 16.2495 19.91 15.1995C19.57 13.5595 18.19 12.2495 16.53 12.0395C13.9 11.6995 11.68 13.9095 12.03 16.5395C12.25 18.1995 13.55 19.5795 15.19 19.9195C16.24 20.1395 17.21 19.9095 18.01 19.4395L19.87 21.2995C20.26 21.6895 20.89 21.6895 21.28 21.2995C21.67 20.9095 21.67 20.2795 21.28 19.8895L19.43 18.0195ZM16 17.9995C14.9 17.9995 14 17.0995 14 15.9995C14 14.8995 14.9 13.9995 16 13.9995C17.1 13.9995 18 14.8995 18 15.9995C18 17.0995 17.1 17.9995 16 17.9995Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(SvgComponent);
ForwardRef.displayName = 'IconPersonSearchRounded'; export { ForwardRef as IconPersonSearchRounded };