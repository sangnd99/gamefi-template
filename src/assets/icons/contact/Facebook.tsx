interface IFacebookIconProps extends React.SVGProps<SVGSVGElement> {}

const FacebookIcon: React.FC<IFacebookIconProps> = ({ ...restProps }) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(restProps as any)}
    >
      <path d="M16.2 0H3.8C1.7 0 0 1.7 0 3.8V16.1C0 18.3 1.7 20 3.8 20H10C10.4 20 10.8 19.7 10.8 19.2V13C10.8 12.6 10.5 12.2 10 12.2H9.2V10.7H10C10.4 10.7 10.8 10.4 10.8 9.9V7.3C10.8 6.2 11.7 5.4 12.7 5.4H14.6V6.9H13.8C13 6.9 12.3 7.6 12.3 8.4V10C12.3 10.4 12.6 10.8 13.1 10.8H14.4L14 12.3H13.1C12.7 12.3 12.3 12.6 12.3 13.1V16.2C12.3 16.6 12.6 17 13.1 17C13.5 17 13.9 16.7 13.9 16.2V13.9H14.7C15.1 13.9 15.4 13.7 15.5 13.3L16.3 10.2C16.4 10 16.3 9.7 16.2 9.5C16 9.3 15.8 9.2 15.6 9.2H14.1V8.5H15.6C16 8.5 16.4 8.2 16.4 7.7V4.6C16.4 4.2 16.1 3.8 15.6 3.8H12.9C11 3.8 9.4 5.4 9.4 7.3V9.2H8.5C8 9.2 7.7 9.6 7.7 10V13.1C7.7 13.5 8 13.9 8.5 13.9H9.3V18.5H3.8C2.5 18.5 1.5 17.5 1.5 16.2V3.8C1.5 2.5 2.5 1.5 3.8 1.5H16.1C17.4 1.5 18.4 2.5 18.4 3.8V16.1C18.4 17.4 17.4 18.4 16.1 18.4H13C12.6 18.4 12.2 18.7 12.2 19.2C12.2 19.6 12.5 20 13 20H16.1C18.2 20 19.9 18.3 19.9 16.2V3.8C20 1.7 18.3 0 16.2 0Z" />
    </svg>
  );
};

export default FacebookIcon;