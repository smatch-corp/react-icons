import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M4.001 3H19.999C21.0995 3 22 3.90667 22 5.01482V11.0593C22 12.1674 21.0995 13.0741 19.999 13.0741H18.2981C17.8779 12.1876 17.0975 11.4824 16.097 11.1701L15.977 11.1399L13.0055 10.5959L12.7654 7.81542C12.7654 6.27408 11.5148 5.01482 9.98399 5.01482C8.45323 5.01482 7.2026 6.27408 7.2026 7.81542V11.9962L6.34217 12.9834C6.31216 13.0137 6.27214 13.0741 6.27214 13.0741H4.001C2.90045 13.0741 2 12.1674 2 11.0593V5.01482C2 3.90667 2.90045 3 4.001 3ZM12.085 11.4426L15.8069 12.1277L15.8269 12.1579C16.9775 12.5105 17.6878 13.5078 17.6678 14.6361V17.7893C17.6578 18.5852 17.5678 19.381 17.3977 20.1567L17.0875 21.4966C17.0375 21.7787 16.7874 21.9902 16.4972 22.0003H16.4472H16.3672C16.1771 21.9499 16.037 21.8593 15.947 21.7082C15.8569 21.557 15.8269 21.3858 15.8669 21.2246L16.1671 19.8847C16.3172 19.1896 16.3872 18.4844 16.3872 17.7793V14.616C16.3872 14.0619 16.037 13.5783 15.5168 13.397L11.3747 12.6415C11.0345 12.581 10.8044 12.2586 10.8544 11.9161L10.5043 7.8764C10.5143 7.69507 10.4542 7.55403 10.3542 7.45329C10.2541 7.35255 10.1341 7.30218 9.994 7.30218C9.70385 7.30218 9.47374 7.53389 9.47374 7.81596V16.0364C9.47374 16.379 9.18359 16.6711 8.84342 16.6711C8.48324 16.6711 8.2031 16.389 8.2031 16.0364V14.3037L8.04302 14.485C7.77289 14.7872 7.62281 15.1801 7.62281 15.5932V17.5677C7.62281 17.9203 7.73287 18.2628 7.93297 18.5449L9.66383 20.9627C9.76388 21.1037 9.8039 21.2649 9.77389 21.4362C9.75388 21.5973 9.66383 21.7484 9.52376 21.8492C9.42371 21.9298 9.30365 21.9802 9.16358 21.9802C8.95348 21.9802 8.76338 21.8895 8.64332 21.7182L6.91246 19.2904C6.55228 18.7867 6.36218 18.1923 6.36218 17.5677V15.5932C6.36218 14.8678 6.62231 14.1727 7.09255 13.6388L8.2031 12.3695V7.80589C8.2031 6.81862 9.0035 6.0127 9.98399 6.0127C10.9645 6.0127 11.7649 6.81862 11.7649 7.80589L12.085 11.4426Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconClickButton };
ForwardRef.displayName = 'IconClickButton';