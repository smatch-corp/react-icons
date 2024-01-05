import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconSouthWest = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M15 17.9997C15 17.4397 14.55 16.9997 14 16.9997H8.41L19.3 6.10973C19.69 5.71973 19.69 5.08973 19.3 4.69973C18.91 4.30973 18.28 4.30973 17.89 4.69973L7 15.5897V9.99973C7 9.44973 6.55 8.99973 6 8.99973C5.45 8.99973 5 9.44973 5 9.99973V17.9997C5 18.5497 5.45 18.9997 6 18.9997H14C14.55 18.9997 15 18.5497 15 17.9997Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconSouthWest);
export { ForwardRef as IconSouthWest };