import cn from "classnames";
import { useState } from "react";

import { useCountDown } from "common/hooks";
import styles from "./Process.module.scss";
import BannerCorner from "assets/svg/banner-corner.svg";
import BannerBackground from "assets/images/banner-background.png";

import LogoIcon from "assets/svg/logo-icon.svg";
import ProgressBar from "components/ProgressBar";

interface IProcessProps {}

const Process: React.FC<IProcessProps> = () => {
  const [complete, _] = useState(43);
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);
  const calculateBottom = -wrapperRef?.clientHeight! / 2;
  const [days, hours, minutes, seconds] = useCountDown(new Date(2022, 3, 10));
  return (
    <div
      ref={setWrapperRef}
      className={cn(styles.container)}
      style={{
        bottom: calculateBottom || 0,
        background: `url(${BannerBackground})`,
      }}
    >
      <img
        src={BannerCorner}
        className={styles["corner-top-left"]}
        draggable={false}
      />
      <div>
        <div className={styles.context}>
          <div className={styles["left-section"]}>
            <img src={LogoIcon} />
            <div className={styles.wrapper}>
              <p className={styles["left-section__title"]}>
                TOBE GAME TOKEN{" "}
                <span className={styles["left-section__title--highlight"]}>
                  (TBG)
                </span>
              </p>
              <p className={styles.description}>PRICE (DDO) = 0.13 BUSD</p>
            </div>
          </div>
          <div className={styles["right-section"]}>
            <p className={styles.description}>SALE END IN</p>
            <div className={styles["right-section__timer"]}>
              <p>
                {days}&nbsp;
                <span>D</span>
              </p>
              <p>
                {hours}&nbsp;
                <span>H</span>
              </p>
              <p>
                {minutes}&nbsp;
                <span>M</span>
              </p>
              <p>
                {seconds}&nbsp;
                <span>S</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.information}>
            <p>Total Raise 38,999.70 TBG ( {complete}% )</p>
            <p>Allocation: 500 TBG Max</p>
            <p>Targeted Raise 100,000 TBG</p>
          </div>
          <ProgressBar complete={complete} />
        </div>
      </div>
      <img
        src={BannerCorner}
        className={styles["corner-bottom-right"]}
        draggable={false}
      />
    </div>
  );
};

export default Process;
