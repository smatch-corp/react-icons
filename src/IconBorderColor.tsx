import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IconBorderColor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M4 23.9997C3.45 23.9997 2.97917 23.8039 2.5875 23.4122C2.19583 23.0206 2 22.5497 2 21.9997C2 21.4497 2.19583 20.9789 2.5875 20.5872C2.97917 20.1956 3.45 19.9997 4 19.9997H20C20.55 19.9997 21.0208 20.1956 21.4125 20.5872C21.8042 20.9789 22 21.4497 22 21.9997C22 22.5497 21.8042 23.0206 21.4125 23.4122C21.0208 23.8039 20.55 23.9997 20 23.9997H4ZM5 17.9997C4.71667 17.9997 4.47917 17.9039 4.2875 17.7122C4.09583 17.5206 4 17.2831 4 16.9997V14.6747C4 14.5414 4.025 14.4122 4.075 14.2872C4.125 14.1622 4.2 14.0497 4.3 13.9497L13.05 5.19972L16.8 8.94972L8.05 17.6997C7.95 17.7997 7.8375 17.8747 7.7125 17.9247C7.5875 17.9747 7.45833 17.9997 7.325 17.9997H5ZM6 15.9997H6.9L14 8.94972L13.05 7.99972L6 15.0997V15.9997ZM17.925 7.84972L14.175 4.09972L15.975 2.29972C16.1583 2.09972 16.3917 2.00389 16.675 2.01222C16.9583 2.02055 17.1917 2.11639 17.375 2.29972L19.725 4.64972C19.9083 4.83305 20 5.06222 20 5.33722C20 5.61222 19.9083 5.84972 19.725 6.04972L17.925 7.84972Z" fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconBorderColor);
export { ForwardRef as IconBorderColor };