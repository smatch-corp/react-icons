import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19 1.99991H14.82C14.4 0.839962 13.3 0 12 0C10.7 0 9.6 0.839962 9.18 1.99991H5C3.9 1.99991 3 2.89987 3 3.99982V19.9991C3 21.099 3.9 21.999 5 21.999H19C20.1 21.999 21 21.099 21 19.9991V3.99982C21 2.89987 20.1 1.99991 19 1.99991ZM12 1.99991C12.55 1.99991 13 2.44989 13 2.99986C13 3.54984 12.55 3.99982 12 3.99982C11.45 3.99982 11 3.54984 11 2.99986C11 2.44989 11.45 1.99991 12 1.99991ZM18 19.9991H6C5.45 19.9991 5 19.5491 5 18.9991V4.99977C5 4.4498 5.45 3.99982 6 3.99982H7V4.99977C7 6.09972 7.9 6.99968 9 6.99968H15C16.1 6.99968 17 6.09972 17 4.99977V3.99982H18C18.55 3.99982 19 4.4498 19 4.99977V18.9991C19 19.5491 18.55 19.9991 18 19.9991Z'
      fill='currentColor'
    />
    <path
      d='M8 14.3939H16C16.55 14.3939 17 13.9439 17 13.3939C17 12.8439 16.55 12.394 16 12.394H8C7.45 12.394 7 12.8439 7 13.3939C7 13.9439 7.45 14.3939 8 14.3939Z'
      fill='currentColor'
    />
    <path
      d='M8 10.8403H16C16.55 10.8403 17 10.3903 17 9.84037C17 9.2904 16.55 8.84042 16 8.84042H8C7.45 8.84042 7 9.2904 7 9.84037C7 10.3903 7.45 10.8403 8 10.8403Z'
      fill='currentColor'
    />
    <path
      d='M8 17.9474H13C13.55 17.9474 14 17.4974 14 16.9475C14 16.3975 13.55 15.9475 13 15.9475H8C7.45 15.9475 7 16.3975 7 16.9475C7 17.4974 7.45 17.9474 8 17.9474Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconProposalList };
ForwardRef.displayName = 'IconProposalList';
