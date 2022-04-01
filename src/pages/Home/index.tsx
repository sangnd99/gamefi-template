import "aos/dist/aos.css";

import styles from "./Home.module.scss";

import Banner from "./components/Banner";
import Feature from "./components/Feature";
import MarketPlace from "./components/MarketPlace";
import Support from "./components/Support";
import TokenomicsAndRoadmap from "./components/TokenomicsAndRoadmap";
import Crew from "./components/Crew";

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Feature />
      <MarketPlace />
      <Support />
      <TokenomicsAndRoadmap />
      <Crew />
    </div>
  );
};

export default Home;
