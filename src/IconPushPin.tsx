import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconPushPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M16 12L18 14V16H13V22L12 23L11 22V16H6V14L8 12V5H7V3H17V5H16V12ZM8.85 14H15.15L14 12.85V5H10V12.85L8.85 14Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconPushPin);
export { ForwardRef as IconPushPin };