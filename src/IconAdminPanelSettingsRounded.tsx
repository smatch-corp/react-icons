import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17 10.9996C17.34 10.9996 17.67 11.0396 18 11.0896V7.57957C18 6.77957 17.53 6.05957 16.8 5.74957L11.3 3.34957C10.79 3.12957 10.21 3.12957 9.7 3.34957L4.2 5.74957C3.47 6.06957 3 6.78957 3 7.57957V11.1796C3 15.7196 6.2 19.9696 10.5 20.9996C11.05 20.8696 11.58 20.6796 12.1 20.4496C11.41 19.4696 11 18.2796 11 16.9996C11 13.6896 13.69 10.9996 17 10.9996Z'
      fill='currentColor'
    />
    <path
      d='M17 13C14.79 13 13 14.79 13 17C13 19.21 14.79 21 17 21C19.21 21 21 19.21 21 17C21 14.79 19.21 13 17 13ZM17 14.38C17.62 14.38 18.12 14.89 18.12 15.5C18.12 16.11 17.61 16.62 17 16.62C16.39 16.62 15.88 16.11 15.88 15.5C15.88 14.89 16.38 14.38 17 14.38ZM17 19.75C16.07 19.75 15.26 19.29 14.76 18.58C14.81 17.86 16.27 17.5 17 17.5C17.73 17.5 19.19 17.86 19.24 18.58C18.74 19.29 17.93 19.75 17 19.75Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconAdminPanelSettingsRounded };
ForwardRef.displayName = 'IconAdminPanelSettingsRounded';
