import styles from "./Feature.module.scss";
import { SectionTitle, SectionHeading } from "components/styles";

import { randomId } from "common/functions";
import { listFeatures } from "./helper";

interface IFeatureProps {}

const Feature: React.FC<IFeatureProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <SectionTitle text="FEATURES" color={true} right={true} />
        <SectionHeading text="KEY POINTS" />
        <div className={styles.context}>
          {listFeatures.map(({ image, title, description }) => (
            <div
              className={styles["context__section"]}
              key={`feature-${randomId()}`}
            >
              <img
                src={image}
                width={95}
                height={95}
                data-aos="zoom-in"
                alt={title}
              />
              <div data-aos="fade-up" className={styles["context__wrapper"]}>
                <p className={styles["context__title"]}>{title}</p>
                <p className={styles["context__desc"]}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;