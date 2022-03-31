import { useState } from "react";
import cn from "classnames";

import styles from "./TokenomicsAndRoadmap.module.scss";
import { randomId } from "common/functions";
import { IYears, listYears, roadmaps } from "./helper";

import { SectionTitle, SectionHeading } from "components/styles";
import DecorateSection from "layouts/DecorateSection";
import { Information } from "assets/svg/tokenomics";
import Next from "assets/svg/next-roadmaps.svg";
import RoundlessButton from "components/RoundlessButton";
import Roadmaps from "./components/Roadmaps";

interface ITokenomicsAndRoadmapProps {}

const TokenomicsAndRoadmap: React.FC<ITokenomicsAndRoadmapProps> = () => {
  const [yearSelected, setYearSelected] = useState<IYears>("2021");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectedYear = (index: number) => {
    setActiveIndex(index);
    setYearSelected(listYears[index] as IYears);
  };

  const handleNavigateYear = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setActiveIndex((state) => {
        if (state === listYears.length - 1) {
          state = 0;
          setYearSelected(listYears[state] as IYears);
        } else {
          state++;
          setYearSelected(listYears[state] as IYears);
        }
        return state;
      });
    } else {
      setActiveIndex((state) => {
        if (state === 0) {
          state = listYears.length - 1;
          setYearSelected(listYears[state] as IYears);
        } else {
          state--;
          setYearSelected(listYears[state] as IYears);
        }
        return state;
      });
    }
  };

  return (
    <DecorateSection>
      <div className={cn(styles.tokenomics, "container")}>
        <SectionTitle text="STATISTICS" right={true} color={true} />
        <SectionHeading text="TOKENOMICS" />
        <img src={Information} className={styles.infomation} />
        <div className={styles["achieve-wrapper"]}>
          <div className={styles.achieve}>
            <p className={styles["achieve__ammount"]}>158</p>
            <p className={styles["achieve__text"]}>Funded Projects</p>
          </div>
          <div className={styles.achieve}>
            <p className={styles["achieve__ammount"]}>486</p>
            <p className={styles["achieve__text"]}>Unique Participants</p>
          </div>
          <div className={styles.achieve}>
            <p className={styles["achieve__ammount"]}>$9M+</p>
            <p className={styles["achieve__text"]}>Raised Capital</p>
          </div>
          <div className={styles.achieve}>
            <p className={styles["achieve__ammount"]}>$18M+</p>
            <p className={styles["achieve__text"]}>Initial Market Cap</p>
          </div>
        </div>
      </div>
      <div className={cn(styles.roadmaps, "container")}>
        <SectionTitle text="OUR GOALS" right={true} color={true} />
        <div className={styles["roadmap-header"]}>
          <div className={styles.action}>
            <SectionHeading text="ROADMAPs" margin={false} />
            <div className={styles.navigation}>
              <div
                className={cn(styles["navigation__button"], styles.rotate)}
                onClick={() => handleNavigateYear("decrease")}
              >
                <img src={Next} width={29} height={26} />
              </div>
              <div
                className={styles["navigation__button"]}
                onClick={() => handleNavigateYear("increase")}
              >
                <img src={Next} width={29} height={26} />
              </div>
            </div>
          </div>
          <div className={styles.years}>
            {listYears.map((year, index) => (
              <RoundlessButton
                key={`year-${randomId()}`}
                fillTertiary={activeIndex === index}
                borderWhite={index !== activeIndex}
                onClick={() => handleSelectedYear(index)}
              >
                {year}
              </RoundlessButton>
            ))}
          </div>
        </div>
        <Roadmaps data={roadmaps[yearSelected]} />
      </div>
    </DecorateSection>
  );
};

export default TokenomicsAndRoadmap;
