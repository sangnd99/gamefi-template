import { Fragment } from "react";

import styles from "./MarketPlace.module.scss";
import MarketPlaceIcon from "assets/svg/market-place.svg";
import { randomId } from "common/functions";

import DecorateSection from "layouts/DecorateSection";
import { SectionHeading, SectionTitle } from "components/styles";
import RoundlessButton from "components/RoundlessButton";
import Card from "./components/Card";

import { listCard } from "./helper";

interface IMarketPlaceProps {}

const MarketPlace: React.FC<IMarketPlaceProps> = () => {
  return (
    <DecorateSection>
      <div className="container">
        <SectionTitle text="MARKETPLACE" color={true} right={true} />
        <div className={styles.heading}>
          <SectionHeading text="NFT ITEMS" margin={false} />
          <RoundlessButton size="md">
            <div className={styles.button}>
              <img src={MarketPlaceIcon} width={15} height={16} />
              MARKETPLACE
            </div>
          </RoundlessButton>
        </div>
        <div className={styles.content}>
          {listCard.map((item) => (
            <Fragment key={`item-card-${randomId()}`}>
              <Card data={item} data-aos="fade-up" data-aos-offset="30" />
            </Fragment>
          ))}
        </div>
      </div>
    </DecorateSection>
  );
};

export default MarketPlace;
