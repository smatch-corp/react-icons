import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconNorthWest = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M6 15C6.56 15 7 14.55 7 14V8.41L17.89 19.3C18.28 19.69 18.91 19.69 19.3 19.3C19.69 18.91 19.69 18.28 19.3 17.89L8.41 7H14C14.55 7 15 6.55 15 6C15 5.45 14.55 5 14 5H6C5.45 5 5 5.45 5 6V14C5 14.55 5.45 15 6 15Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconNorthWest);
export { ForwardRef as IconNorthWest };