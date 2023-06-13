import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19 16C17.35 16 16 17.35 16 19C16 20.65 17.35 22 19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16ZM19 20C18.45 20 18 19.55 18 19C18 18.45 18.45 18 19 18C19.55 18 20 18.45 20 19C20 19.55 19.55 20 19 20Z"
      fill="currentColor"
    />
    <path
      d="M14.35 18.0202L11.08 15.6802C10.63 15.3602 10.01 15.4602 9.68 15.9102C9.36 16.3602 9.46 16.9802 9.91 17.3002L10.87 17.9902H6.5C5.12 17.9902 4 16.8702 4 15.4902C4 14.1102 5.12 12.9902 6.5 12.9902H17.5C19.98 12.9902 22 10.9702 22 8.49023C22 6.01023 19.98 3.99023 17.5 3.99023H7.82C7.41 2.83023 6.31 1.99023 5 1.99023C3.35 1.99023 2 3.34023 2 4.99023C2 6.64023 3.35 7.99023 5 7.99023C6.3 7.99023 7.4 7.15023 7.82 5.99023H17.5C18.88 5.99023 20 7.11023 20 8.49023C20 9.87023 18.88 10.9902 17.5 10.9902H6.5C4.02 10.9902 2 13.0102 2 15.4902C2 17.9702 4.02 19.9902 6.5 19.9902H10.88L9.92 20.6802C9.47 21.0002 9.37 21.6302 9.69 22.0702C9.89 22.3402 10.19 22.4902 10.5 22.4902C10.7 22.4902 10.9 22.4302 11.08 22.3002L14.36 19.9602C14.67 19.7402 14.86 19.3702 14.86 18.9902C14.86 18.6102 14.66 18.2502 14.35 18.0202ZM5 6.00023C4.45 6.00023 4 5.55023 4 5.00023C4 4.45023 4.45 4.00023 5 4.00023C5.55 4.00023 6 4.45023 6 5.00023C6 5.55023 5.55 6.00023 5 6.00023Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconProcess };
ForwardRef.displayName = 'IconProcess';
