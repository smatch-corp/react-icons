import type { SVGProps } from 'react';

import { Ref, forwardRef } from 'react';
const IconWonCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill="none"
        height="1em"
        ref={ref}
        viewBox="0 0 24 24"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_4229_32378)">
            <path
                d="M12 2.00391C6.48003 2.00391 2.00403 6.47991 2.00403 11.9999C2.00403 17.5199 6.48003 21.9959 12 21.9959C17.52 21.9959 21.996 17.5199 21.996 11.9999C21.996 6.47991 17.52 2.00391 12 2.00391ZM18.024 13.0079H16.812L15.684 17.0639C15.54 17.5799 15.06 17.9399 14.52 17.9399H14.496C13.956 17.9399 13.488 17.5679 13.344 17.0519L12 11.9399L10.656 17.0519C10.512 17.5679 10.044 17.9399 9.50403 17.9399C8.96403 17.9399 8.49603 17.5799 8.34003 17.0639L7.21203 13.0079H6.00003C5.44803 13.0079 5.00403 12.5519 5.00403 12.0119C5.00403 11.4719 5.46003 11.0159 6.00003 11.0159H6.66003L6.03603 8.78391C5.89203 8.25591 6.19203 7.70391 6.73203 7.54791C7.26003 7.40391 7.81203 7.70391 7.95603 8.24391L8.92803 11.7359V11.7599L9.45603 13.6799L10.824 8.49591C10.968 7.96791 11.448 7.60791 11.988 7.60791C12.528 7.60791 13.008 7.97991 13.152 8.49591L14.52 13.6799L15.048 11.7839C15.048 11.7839 15.048 11.7359 15.072 11.6999L16.032 8.24391C16.176 7.71591 16.728 7.40391 17.268 7.54791C17.796 7.69191 18.108 8.24391 17.964 8.78391L17.34 11.0159H18C18.552 11.0159 18.996 11.4719 18.996 12.0119C18.996 12.5519 18.54 13.0079 18 13.0079H18.024Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_4229_32378">
                <rect fill="currentColor" height={24} width={24} />
            </clipPath>
        </defs>
    </svg>
);
const ForwardRef = forwardRef(IconWonCircle);
export { ForwardRef as IconWonCircle };
