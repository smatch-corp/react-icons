import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 18.588C15.6385 18.588 18.588 15.6385 18.588 12C18.588 8.36155 15.6385 5.412 12 5.412C8.36155 5.412 5.412 8.36155 5.412 12C5.412 15.6385 8.36155 18.588 12 18.588Z"
      fill="currentColor"
    />
    <circle cx={19.7995} cy={12.0041} fill="currentColor" r={1.2} transform="rotate(-90 19.7995 12.0041)" />
    <defs>
      <radialGradient
        cx={0}
        cy={0}
        gradientTransform="translate(12 12) scale(9)"
        gradientUnits="userSpaceOnUse"
        id="paint0_angular_4229_32354"
        r={1}
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconLoadingSpinner };
ForwardRef.displayName = 'IconLoadingSpinner';
