interface IMediumIconProps extends React.SVGProps<SVGSVGElement> {}

const MediumIcon: React.FC<IMediumIconProps> = ({ ...restProps }) => {
  return (
    <svg
      width={29}
      height={16}
      viewBox="0 0 29 16"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(restProps as any)}
    >
      <g clipPath="url(#clip0_109_991)">
        <path
          d="M27 13.8996C26.6 13.4996 26 11.5996 26 7.99961C26 4.39961 26.6 2.39961 26.9 2.09961C27.3 2.49961 27.8 4.59961 27.8 7.99961C27.9 11.5996 27.3 13.4996 27 13.8996Z"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.4992 14.6004C18.6992 14.6004 17.1992 11.6004 17.1992 8.00039C17.1992 5.50039 17.8992 3.20039 18.9992 2.10039C19.4992 1.60039 19.9992 1.40039 20.4992 1.40039C21.2992 1.40039 22.1992 2.10039 22.7992 3.20039C23.4992 4.50039 23.8992 6.20039 23.8992 8.00039C23.8992 11.6004 22.2992 14.6004 20.4992 14.6004Z"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.9 15C4.1 15 1 11.9 1 8C1 6.1 1.7 4.4 3 3C4.3 1.7 6.1 1 7.9 1C9.8 1 11.5 1.7 12.8 3.1C14.1 4.4 14.8 6.2 14.8 8.1C14.9 11.9 11.7 15 7.9 15Z"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_109_991">
          <rect width="28.9" height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MediumIcon;
