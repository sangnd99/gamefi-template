import cn from "classnames";

import styles from "./Support.module.scss";
import Intergration from "assets/svg/intergration.svg";
import Done from "assets/svg/done.svg";
import { SectionTitle, SectionHeading } from "components/styles";

interface ISupportProps {}

const Support: React.FC<ISupportProps> = (props) => {
  return (
    <section className={styles.wrapper}>
      <div className={cn(styles.container, "container")}>
        <img
          src={Intergration}
          width={452}
          height={432}
          alt="Intergration"
          data-aos="zoom-in"
        />
        <div className={styles.description} data-aos="fade-up">
          <div>
            <SectionTitle text="INTEGRATION" right={true} color={true} />
            <SectionHeading text="MULTI-CHAIN SUPPORT" />
            <p className={styles.text}>
              It must explain to you how all this mistaken idea of new gem
              denouncing pleasure and praising pain that they cannot foresee The
              gain and trouble that are bound to ensue.
            </p>
            <div className={styles.type}>
              <ul className={styles["type__list"]}>
                <li className={styles["type__item"]}>
                  <img src={Done} />
                  <p>Binance Smart Chain</p>
                </li>
                <li className={styles["type__item"]}>
                  <img src={Done} />
                  <p>Ethereum</p>
                </li>
                <li className={styles["type__item"]}>
                  <img src={Done} />
                  <p>Polygon (Matic)</p>
                </li>
              </ul>
              <ul className={styles["type__list"]}>
                <li className={styles["type__item"]}>
                  <img src={Done} />
                  <p>Avalanche</p>
                </li>
                <li className={styles["type__item"]}>
                  <img src={Done} />
                  <p>Fuse</p>
                </li>
                <li className={styles["type__item"]}>
                  <img src={Done} />
                  <p>OKEX Chain</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
