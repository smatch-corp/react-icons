import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 21.325C11.7667 21.325 11.5333 21.2833 11.3 21.2C11.0667 21.1167 10.8583 20.9917 10.675 20.825C9.59166 19.825 8.63333 18.85 7.8 17.9C6.96666 16.95 6.27083 16.0292 5.7125 15.1375C5.15416 14.2458 4.72916 13.3875 4.4375 12.5625C4.14583 11.7375 4 10.95 4 10.2C4 9.66667 4.04166 9.15833 4.125 8.675C4.20833 8.19167 4.325 7.73333 4.475 7.3L1.375 4.2C1.175 4 1.075 3.7625 1.075 3.4875C1.075 3.2125 1.175 2.975 1.375 2.775C1.575 2.575 1.8125 2.475 2.0875 2.475C2.3625 2.475 2.6 2.575 2.8 2.775L21.2 21.175C21.4 21.375 21.5 21.6125 21.5 21.8875C21.5 22.1625 21.4 22.4 21.2 22.6C21 22.8 20.7625 22.9 20.4875 22.9C20.2125 22.9 19.975 22.8 19.775 22.6L15.675 18.5C15.2583 18.9333 14.8417 19.3625 14.425 19.7875C14.0083 20.2125 13.6417 20.5583 13.325 20.825C13.1417 20.9917 12.9333 21.1167 12.7 21.2C12.4667 21.2833 12.2333 21.325 12 21.325ZM18.2 15.325L13.775 10.9C13.8583 10.7667 13.9167 10.625 13.95 10.475C13.9833 10.325 14 10.1667 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.8333 8 11.675 8.01667 11.525 8.05C11.375 8.08333 11.2333 8.14167 11.1 8.225L6.775 3.9C7.49166 3.28333 8.3 2.8125 9.2 2.4875C10.1 2.1625 11.0333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11 19.85 11.8208 19.55 12.6625C19.25 13.5042 18.8 14.3917 18.2 15.325Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconLocationOffRounded };
ForwardRef.displayName = 'IconLocationOffRounded';
