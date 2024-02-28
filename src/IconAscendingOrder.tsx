import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconAscendingOrder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M11.6199 7.72222C11.8195 7.48796 12.1814 7.48796 12.381 7.72222L17.8805 14.1757C18.1571 14.5003 17.9264 15 17.4999 15L6.501 15C6.0745 15 5.84381 14.5003 6.12044 14.1757L11.6199 7.72222Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconAscendingOrder);
export { ForwardRef as IconAscendingOrder };