import Header from "./components/Header";
import Footer from "./components/Footer";

interface IHomeLayoutProps {}

const HomeLayout: React.FC<IHomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
