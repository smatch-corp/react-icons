import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconContract = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M6 22C5.16667 22 4.45833 21.7083 3.875 21.125C3.29167 20.5417 3 19.8333 3 19V18C3 17.45 3.19583 16.9792 3.5875 16.5875C3.97917 16.1958 4.45 16 5 16H6V4C6 3.45 6.19583 2.97917 6.5875 2.5875C6.97917 2.19583 7.45 2 8 2H19C19.55 2 20.0208 2.19583 20.4125 2.5875C20.8042 2.97917 21 3.45 21 4V19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22H6ZM18 20C18.2833 20 18.5208 19.9042 18.7125 19.7125C18.9042 19.5208 19 19.2833 19 19V4H8V16H15C15.55 16 16.0208 16.1958 16.4125 16.5875C16.8042 16.9792 17 17.45 17 18V19C17 19.2833 17.0958 19.5208 17.2875 19.7125C17.4792 19.9042 17.7167 20 18 20ZM10 9C9.71667 9 9.47917 8.90417 9.2875 8.7125C9.09583 8.52083 9 8.28333 9 8C9 7.71667 9.09583 7.47917 9.2875 7.2875C9.47917 7.09583 9.71667 7 10 7H17C17.2833 7 17.5208 7.09583 17.7125 7.2875C17.9042 7.47917 18 7.71667 18 8C18 8.28333 17.9042 8.52083 17.7125 8.7125C17.5208 8.90417 17.2833 9 17 9H10ZM10 12C9.71667 12 9.47917 11.9042 9.2875 11.7125C9.09583 11.5208 9 11.2833 9 11C9 10.7167 9.09583 10.4792 9.2875 10.2875C9.47917 10.0958 9.71667 10 10 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12H10ZM6 20H15V18H5V19C5 19.2833 5.09583 19.5208 5.2875 19.7125C5.47917 19.9042 5.71667 20 6 20ZM6 20H5H15H6Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconContract);
export { ForwardRef as IconContract };