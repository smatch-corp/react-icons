import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconArrowUpward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M13 19.0005V7.83047L17.88 12.7105C18.27 13.1005 18.91 13.1005 19.3 12.7105C19.69 12.3205 19.69 11.6905 19.3 11.3005L12.71 4.71047C12.32 4.32047 11.69 4.32047 11.3 4.71047L4.69997 11.2905C4.30997 11.6805 4.30997 12.3105 4.69997 12.7005C5.08997 13.0905 5.71997 13.0905 6.10997 12.7005L11 7.83047V19.0005C11 19.5505 11.45 20.0005 12 20.0005C12.55 20.0005 13 19.5505 13 19.0005Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconArrowUpward);
export { ForwardRef as IconArrowUpward };