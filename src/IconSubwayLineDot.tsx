import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" height="1em" ref={ref} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={12} cy={12} fill="currentColor" r={4} />
    <circle cx={12} cy={12} r={3.5} stroke="currentColor" strokeOpacity={0.08} />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconSubwayLineDot };
ForwardRef.displayName = 'IconSubwayLineDot';
