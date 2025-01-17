import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconArrowBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M19 10.9997H7.82998L12.71 6.11973C13.1 5.72973 13.1 5.08973 12.71 4.69973C12.32 4.30973 11.69 4.30973 11.3 4.69973L4.70998 11.2897C4.31998 11.6797 4.31998 12.3097 4.70998 12.6997L11.3 19.2897C11.69 19.6797 12.32 19.6797 12.71 19.2897C13.1 18.8997 13.1 18.2697 12.71 17.8797L7.82998 12.9997H19C19.55 12.9997 20 12.5497 20 11.9997C20 11.4497 19.55 10.9997 19 10.9997Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconArrowBack);
export { ForwardRef as IconArrowBack };