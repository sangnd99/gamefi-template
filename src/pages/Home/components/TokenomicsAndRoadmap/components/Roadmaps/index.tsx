import styles from "./Roadmaps.module.scss";
import { randomId } from "common/functions";

import Done from "assets/svg/done.svg";
import Inprogress from "assets/svg/inprogress.svg";
import Checked from "assets/svg/checked.svg";
import UnChecked from "assets/svg/unchecked.svg";
import Separate from "assets/svg/roadmap-separate.svg";

interface IRoadmapsProps {
  data: any[];
}

const Roadmaps: React.FC<IRoadmapsProps> = ({ data }) => {
  return (
    <ul className={styles.container}>
      <img src={Separate} className={styles.separate} />
      {data.map((item) => {
        const { date, done, targets } = item;
        return (
          <li className={styles.item} key={`road-maps-${randomId()}`}>
            <p className={styles.heading}>{date}</p>
            <div className={styles.content}>
              <img
                src={done ? Checked : UnChecked}
                width={20}
                height={20}
                className={styles.status}
              />
              {targets.map(({ name, done }: any) => (
                <div className={styles.target} key={`target-${randomId()}`}>
                  <img src={done ? Done : Inprogress} />
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Roadmaps;
