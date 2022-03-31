import cn from "classnames";
import { isMobileOnly } from "react-device-detect";

import { randomId } from "common/functions";

import styles from "./ProgressBar.module.scss";

interface IProgressBarProps {
  complete: number;
}

const MAXIMUM = 100;

const ProgressBar: React.FC<IProgressBarProps> = ({ complete }) => {
  const computeAmmount = isMobileOnly ? MAXIMUM / 2 : MAXIMUM;
  const computeComplete = isMobileOnly ? Math.floor(complete / 2) : complete;
  const completedArray = new Array(computeComplete).fill(randomId());
  const containtArray = new Array(computeAmmount - computeComplete).fill(
    randomId(),
  );
  return (
    <div className={styles.container}>
      {completedArray.map(() => (
        <span
          className={cn(styles.element, styles.active, {
            [styles["width-desktop"]]: !isMobileOnly,
            [styles["width-mobile"]]: isMobileOnly,
          })}
          key={`active-process-${randomId()}`}
        />
      ))}
      {containtArray.map(() => (
        <span
          className={cn(styles.element, {
            [styles["width-desktop"]]: !isMobileOnly,
            [styles["width-mobile"]]: isMobileOnly,
          })}
          key={`unactive-process-${randomId()}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
