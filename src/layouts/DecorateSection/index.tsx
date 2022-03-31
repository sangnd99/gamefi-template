import styles from "./DecorateSection.module.scss";

import Background from "assets/images/background.jpg";
import PageSplit from "assets/svg/page-split.svg";

interface IDecorateSectionProps {}

const DecorateSection: React.FC<IDecorateSectionProps> = ({ children }) => {
  return (
    <section
      className={styles.wrapper}
      style={{ background: `url(${Background})` }}
    >
      <img src={PageSplit} className={styles["top-left"]} draggable={false} />
      {children}
      <img
        src={PageSplit}
        className={styles["bottom-right"]}
        draggable={false}
      />
    </section>
  );
};

export default DecorateSection;
