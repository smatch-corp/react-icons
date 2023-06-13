import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill='none' height='1em' ref={ref} viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.967 14.9873C11.391 14.9873 10.917 15.4583 10.917 16.0373C10.917 16.6163 11.388 17.0873 11.967 17.0873C12.546 17.0873 13.017 16.6163 13.017 16.0373C13.017 15.4583 12.546 14.9873 11.967 14.9873Z'
      fill='currentColor'
    />
    <path
      d='M11.964 7.1123C10.842 7.1123 9.98996 7.6643 9.47996 8.4203C9.22796 8.7983 9.40796 9.3173 9.82496 9.4973C10.146 9.6293 10.527 9.53331 10.713 9.2363C10.959 8.85231 11.358 8.53431 11.973 8.53431C13.326 8.53431 13.596 9.8003 13.116 10.4753C12.915 10.7633 12.651 11.0063 12.381 11.2553C12.045 11.5643 11.706 11.8763 11.484 12.2813C11.337 12.5423 11.274 12.8213 11.244 13.0883C11.193 13.5443 11.565 13.9373 12.021 13.9373C12.408 13.9373 12.723 13.6373 12.771 13.2563C12.801 13.0193 12.849 12.9053 12.927 12.7643C13.086 12.4733 13.308 12.2573 13.569 12.0053C13.845 11.7383 14.163 11.4323 14.487 10.9523C15.054 10.1123 14.838 8.98431 14.472 8.38131C14.043 7.67931 13.197 7.1153 11.964 7.1153V7.1123Z'
      fill='currentColor'
    />
    <path
      d='M12.099 2.09961C6.57598 2.09961 2.09998 6.57561 2.09998 12.0986C2.09998 17.6216 6.57598 22.0976 12.099 22.0976C17.622 22.0976 22.098 17.6216 22.098 12.0986C22.098 6.57561 17.622 2.09961 12.099 2.09961ZM12.099 20.0996C7.67998 20.0996 4.09798 16.5206 4.09798 12.0986C4.09798 7.67661 7.67998 4.10061 12.099 4.10061C16.518 4.10061 20.1 7.67961 20.1 12.1016C20.1 16.5236 16.521 20.1026 12.099 20.1026V20.0996Z'
      fill='currentColor'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export { ForwardRef as IconQuestionOutlineRounded };
ForwardRef.displayName = 'IconQuestionOutlineRounded';
