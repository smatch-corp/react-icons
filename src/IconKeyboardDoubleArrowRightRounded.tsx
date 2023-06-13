import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.7 6.70949C5.31 7.09949 5.31 7.72949 5.7 8.11949L9.58 11.9995L5.7 15.8795C5.31 16.2695 5.31 16.8995 5.7 17.2895C6.09 17.6795 6.72 17.6795 7.11 17.2895L11.7 12.6995C12.09 12.3095 12.09 11.6795 11.7 11.2895L7.12 6.70949C6.73 6.31949 6.09 6.31949 5.7 6.70949Z"
      fill="currentColor"
    />
    <path
      d="M12.29 6.70978C11.9 7.09978 11.9 7.72978 12.29 8.11978L16.17 11.9998L12.29 15.8798C11.9 16.2698 11.9 16.8998 12.29 17.2898C12.68 17.6798 13.31 17.6798 13.7 17.2898L18.29 12.6998C18.68 12.3098 18.68 11.6798 18.29 11.2898L13.7 6.69978C13.32 6.31978 12.68 6.31978 12.29 6.70978Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconKeyboardDoubleArrowRightRounded };
ForwardRef.displayName = 'IconKeyboardDoubleArrowRightRounded';
