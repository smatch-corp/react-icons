import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconDescendingOrder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12.381 15.2778C12.1813 15.512 11.8195 15.512 11.6198 15.2778L6.1204 8.8243C5.84377 8.49968 6.07446 8 6.50096 8L17.4999 8C17.9264 8 18.157 8.49968 17.8804 8.8243L12.381 15.2778Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconDescendingOrder);
export { ForwardRef as IconDescendingOrder };