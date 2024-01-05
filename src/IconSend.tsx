import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconSend = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M19.8 12.9252L4.4 19.4252C4.06667 19.5585 3.75 19.5294 3.45 19.3377C3.15 19.146 3 18.8669 3 18.5002V5.50022C3 5.13355 3.15 4.85438 3.45 4.66272C3.75 4.47105 4.06667 4.44188 4.4 4.57522L19.8 11.0752C20.2167 11.2585 20.425 11.5669 20.425 12.0002C20.425 12.4335 20.2167 12.7419 19.8 12.9252ZM5 17.0002L16.85 12.0002L5 7.00022V10.5002L11 12.0002L5 13.5002V17.0002Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconSend);
export { ForwardRef as IconSend };