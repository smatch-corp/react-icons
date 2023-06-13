import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M13 3.06C17.17 3.52 20.48 6.83 20.94 11H22C22.55 11 23 11.45 23 12C23 12.55 22.55 13 22 13H20.94C20.48 17.17 17.17 20.48 13 20.94V22C13 22.55 12.55 23 12 23C11.45 23 11 22.55 11 22V20.94C6.83 20.48 3.52 17.17 3.06 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11H3.06C3.52 6.83 6.83 3.52 11 3.06V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2V3.06ZM5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12ZM8.36914 11.5114C8.36914 9.24958 10.095 7.78711 12.0026 7.78711C13.9102 7.78711 15.6361 9.24958 15.6361 11.5114C15.6361 12.9557 14.5233 14.6544 12.3069 16.6119C12.1343 16.7618 11.8754 16.7618 11.7028 16.6119C9.48189 14.6544 8.36914 12.9557 8.36914 11.5114ZM11.0942 11.4206C11.0942 11.9202 11.503 12.3289 12.0026 12.3289C12.5022 12.3289 12.911 11.9202 12.911 11.4206C12.911 10.921 12.5022 10.5122 12.0026 10.5122C11.503 10.5122 11.0942 10.921 11.0942 11.4206Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconLocationPin };
ForwardRef.displayName = 'IconLocationPin';
