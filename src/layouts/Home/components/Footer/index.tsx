import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
import { SectionTitle, SectionHeading } from "components/styles";
import Background from "assets/svg/contact-background.svg";
import Logo from "assets/svg/footer-logo.svg";
import { listContact, listNavigation } from "./helper";
import { randomId } from "common/functions";
import BannerCorner from "assets/svg/banner-corner.svg";
import RoundlessButton from "components/RoundlessButton";
import ArrowRight from "assets/svg/arrow-right.svg";
import Number1 from "assets/svg/1.svg";
import Number2 from "assets/svg/2.svg";
import Number3 from "assets/svg/3.svg";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  const handleVerifyKYC = () => {
    console.log("verify KYC");
  };
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.participate)}>
        <div className={styles.header}>
          <div>
            <SectionTitle text="3 easy step" color={true} right={true} />
            <SectionHeading text="How to Participate" />
          </div>
          <RoundlessButton onClick={handleVerifyKYC}>
            <div className={styles.button}>
              <p>Verify KYC</p>
              <img src={ArrowRight} />
            </div>
          </RoundlessButton>
        </div>
        <div className={styles.step}>
          <div className={styles["step__section"]}>
            <img
              src={Number1}
              className={styles["step__image"]}
              width={50}
              height={100}
            />
            <div
              className={cn(
                styles["step__desc"],
                styles["step__desc--padding"],
              )}
            >
              <p className={styles["step__title"]}>Submit KYC</p>
              <p className={styles["step__text"]}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece
              </p>
            </div>
          </div>
          <div className={styles["step__section"]}>
            <img
              src={Number2}
              className={styles["step__image"]}
              width={76}
              height={100}
            />
            <div className={styles["step__desc"]}>
              <p className={styles["step__title"]}>Verify Wallet</p>
              <p className={styles["step__text"]}>
                Popular belief Ipsum is not simply random text. It has roots in
                a piece of classical
              </p>
            </div>
          </div>
          <div className={styles["step__section"]}>
            <img
              src={Number3}
              className={styles["step__image"]}
              width={76}
              height={100}
            />
            <div className={styles["step__desc"]}>
              <p className={styles["step__title"]}>Start Staking</p>
              <p className={styles["step__text"]}>
                Belief norem Isum is not simply random text. It has roots in a
                piece of classical
              </p>
            </div>
          </div>
        </div>
        <img
          src={BannerCorner}
          className={styles["top-left-corner"]}
          draggable={false}
        />
        <img
          src={BannerCorner}
          className={styles["bottom-right-corner"]}
          draggable={false}
        />
      </div>
      <div className={cn(styles.container, { ["container"]: true })}>
        <SectionTitle text="FIND US ON SOCIAL" />
        <ul className={styles.list}>
          {listContact.map(({ Icon, link }) => {
            return (
              <li className={styles["list-item"]} key={`list-${randomId()}`}>
                <a href={link}>
                  <div
                    style={{ background: `url(${Background})` }}
                    className={styles.contact}
                  >
                    <Icon />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <img src={Logo} width={170} height={98} alt="Tobe Game Logo" />
        <div className={styles.navigation}>
          <ul className={styles.list}>
            {listNavigation.map(({ link, name }) => (
              <li key={`navigation-${randomId()}`}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
          <p className={styles["coppy-right"]}>
            Copyright © 2022. All Rights Reserved by GaFi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
