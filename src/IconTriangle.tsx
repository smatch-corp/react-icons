import { forwardRef } from 'react';
import type { SVGAttributes } from 'react';
export const IconTriangle = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>((props, ref) => {
  return <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12 3.61719L2.5 20.3819H21.5L12 3.61719Z" fill="currentColor" /></svg>;
});
IconTriangle.displayName = "IconTriangle";