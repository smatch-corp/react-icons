import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconRadioBlank = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21ZM12 5C8.14 5 5 8.14 5 12C5 15.86 8.14 19 12 19C15.86 19 19 15.86 19 12C19 8.14 15.86 5 12 5Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconRadioBlank);
export { ForwardRef as IconRadioBlank };