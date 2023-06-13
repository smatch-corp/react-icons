import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      clipRule='evenodd'
      d='M12 2C6.47716 2 2 6.47716 2 12C2 17.5229 6.47716 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47716 17.5229 2 12 2ZM9.40392 9.62557V10.9145H7.45392V12.8811C7.45392 13.5478 7.81503 13.7978 8.25948 13.7978C8.60948 13.7978 8.97614 13.6256 9.27059 13.4478L9.80392 14.5811C9.3317 14.9089 8.7817 15.1478 8.02059 15.1478C6.6817 15.1478 6.00392 14.3978 6.00392 12.9978V10.9145H4.96503V9.62557H6.00392V8.02557H7.45392V9.62557H9.40392ZM12.135 9.62557V15.0089H10.685V9.62557H12.135ZM10.4794 7.86446C10.4794 7.34223 10.8794 6.93112 11.4017 6.93112C11.9183 6.93112 12.3294 7.34223 12.3294 7.86446C12.3294 8.38668 11.9183 8.78668 11.4017 8.78668C10.8794 8.78668 10.4794 8.38668 10.4794 7.86446ZM15.0748 10.22C15.4303 9.77557 15.9414 9.48112 16.6803 9.48112C18.1637 9.48112 19.2914 10.6978 19.2914 12.3145C19.2914 13.9311 18.1748 15.1478 16.6859 15.1478C15.9581 15.1478 15.4581 14.87 15.1026 14.4478V17.2311H13.6581V9.62557H15.0748V10.22ZM17.8026 12.3145C17.8026 11.4922 17.2692 10.8311 16.4137 10.8311C15.5914 10.8311 15.0303 11.4645 15.0303 12.3145C15.0303 13.1644 15.5914 13.7978 16.4137 13.7978C17.2692 13.7978 17.8026 13.1367 17.8026 12.3145Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconTipText };
ForwardRef.displayName = 'IconTipText';
