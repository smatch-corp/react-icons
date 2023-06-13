import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.41674 5.76144L5.17074 8.00744C4.79785 8.38032 4.29183 8.58968 3.76458 8.58968H2V12.0002H5.17749C5.70474 12.0002 6.21077 11.7908 6.58365 11.4179L8.82965 9.17192C9.20254 8.79904 9.70857 8.58968 10.2358 8.58968H12.0004V5.17871H8.82338C8.29613 5.17871 7.79011 5.38807 7.41722 5.76095L7.41674 5.76144Z"
      fill="currentColor"
    />
    <path
      d="M20.2345 8.5892H21.9991V5.17871H18.822C18.2948 5.17871 17.7888 5.38807 17.4159 5.76095L15.1699 8.00695C14.797 8.37984 14.291 8.5892 13.7637 8.5892H11.9991V11.9997H15.1762C15.7034 11.9997 16.2094 11.7903 16.5823 11.4174L18.8283 9.17144C19.2012 8.79855 19.7072 8.5892 20.2345 8.5892Z"
      fill="currentColor"
    />
    <path
      d="M7.41674 12.5822L5.17074 14.8282C4.79785 15.2011 4.29183 15.4105 3.76458 15.4105H2V18.821H5.17749C5.70474 18.821 6.21077 18.6116 6.58365 18.2387L8.82965 15.9927C9.20254 15.6198 9.70857 15.4105 10.2358 15.4105H12.0004V12H8.82338C8.29613 12 7.79011 12.2094 7.41722 12.5822H7.41674Z"
      fill="currentColor"
    />
    <path
      d="M16.5832 18.2387L18.8292 15.9927C19.2021 15.6198 19.7081 15.4105 20.2354 15.4105H22V12H18.823C18.2957 12 17.7897 12.2094 17.4168 12.5822L15.1708 14.8282C14.7979 15.2011 14.2919 15.4105 13.7646 15.4105H12.0001V18.821H15.1771C15.7043 18.821 16.2103 18.6116 16.5832 18.2387Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconSmatchCorp };
ForwardRef.displayName = 'IconSmatchCorp';
