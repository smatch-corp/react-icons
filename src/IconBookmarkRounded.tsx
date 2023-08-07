import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 18L7.8 19.8C7.13333 20.0833 6.5 20.0292 5.9 19.6375C5.3 19.2458 5 18.6917 5 17.975V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V17.975C19 18.6917 18.7 19.2458 18.1 19.6375C17.5 20.0292 16.8667 20.0833 16.2 19.8L12 18ZM12 15.8L17 17.95V5H7V17.95L12 15.8ZM12 5H7H17H12Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconBookmarkRounded };
ForwardRef.displayName = 'IconBookmarkRounded';
