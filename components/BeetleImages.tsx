import React from 'react';

interface SvgIconProps {
  className?: string;
  hoverColorClass?: string;
}

const BeetleSvgIcon: React.FC<SvgIconProps> = ({ className, hoverColorClass = 'group-hover:text-teal-300' }) => {
  const svgProps = {
    className: `w-full h-full object-contain p-8 text-gray-500 transition-all duration-500 ease-in-out group-hover:scale-110 ${hoverColorClass} ${className || ''}`.trim(),
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  };

  return (
    <svg {...svgProps}>
        <path d="M16.22,11.35L15.3,12.27C14.17,13.4 13.5,14.07 13.5,15.5C13.5,16.03 13.72,16.5 14.09,16.82L15,17.65C15.5,18.15 15.5,19 15,19.5C14.5,20 13.67,20.03 13.13,19.5L12.21,18.58C11.5,17.87 11.07,17.47 10.5,17.47C10.19,17.47 9.89,17.58 9.64,17.79L8.78,18.65C8.28,19.15 7.5,19.15 7,18.65C6.5,18.15 6.5,17.32 7,16.82L7.91,15.91C8.63,15.19 9,14.81 9,14C9,13.5 8.79,13.1 8.44,12.72L7.5,11.78C7,11.28 7,10.5 7.5,10C8,9.5 8.83,9.53 9.37,10L10.29,10.92C11,11.63 11.43,12.03 12,12.03C12.31,12.03 12.61,11.92 12.86,11.71L13.72,10.85C14.22,10.35 15,10.35 15.5,10.85C16,11.35 16,12.18 15.5,12.68M20,8H17V6C17,3.79 15.21,2 13,2H11C8.79,2 7,3.79 7,6V8H4C2.9,8 2,8.9 2,10V18C2,19.1 2.9,20 4,20H5.73C6.6,21.19 7.9,22 9.5,22C11.1,22 12.4,21.19 13.27,20H20C21.1,20 22,19.1 22,18V10C22,8.9 21.1,8 20,8Z" />
    </svg>
  );
};

export const AdephagaImage: React.FC<SvgIconProps> = ({ className, hoverColorClass }) => <BeetleSvgIcon className={className} hoverColorClass={hoverColorClass} />;
export const PolyphagaImage: React.FC<SvgIconProps> = ({ className, hoverColorClass }) => <BeetleSvgIcon className={className} hoverColorClass={hoverColorClass} />;
export const ArchostemataImage: React.FC<SvgIconProps> = ({ className, hoverColorClass }) => <BeetleSvgIcon className={className} hoverColorClass={hoverColorClass} />;
export const MyxophagaImage: React.FC<SvgIconProps> = ({ className, hoverColorClass }) => <BeetleSvgIcon className={className} hoverColorClass={hoverColorClass} />;
