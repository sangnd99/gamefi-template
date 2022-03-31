import styles from "./Card.module.scss";

import CardCorner from "assets/svg/card-corner.svg";
import Timer from "assets/svg/timer.svg";
import LogoIcon from "assets/svg/logo-icon.svg";

interface ICardProps {
  data: any;
}

const Card: React.FC<ICardProps> = ({ data, ...restProps }) => {
  const { image, name, dayLeft } = data;
  const handleClickItem = () => {
    console.log("item clicked");
  };
  return (
    <div
      className={styles.container}
      onClick={handleClickItem}
      {...(restProps as any)}
    >
      <img
        src={CardCorner}
        className={styles["decoration-top-left"]}
        draggable={false}
      />
      <div className={styles.content}>
        <img src={image} alt={name} />
        <div className={styles.wrapper}>
          <div className={styles.information}>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>PRICE (TBG) = 0.59 TBG</p>
          </div>
          <img src={LogoIcon} width={48} height={48} />
        </div>
      </div>
      <img
        src={CardCorner}
        className={styles["decoration-bottom-right"]}
        draggable={false}
      />
      <div className={styles.timmer} style={{ background: `url(${Timer})` }}>
        {`${dayLeft} DAY LEFT`}
      </div>
    </div>
  );
};

export default Card;
