import cn from "classnames";

import styles from "./SectionTitle.module.scss";

import TitleDecoration from "assets/svg/title-decoration.svg";

interface ISectionTitleProps {
  text: string;
  color?: boolean;
  left?: boolean;
  right?: boolean;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({
  text,
  color = false,
  left = false,
  right = false,
}) => {
  return (
    <div className={cn(styles.container, { [styles.color]: color })}>
      {!right && (
        <img
          src={TitleDecoration}
          width={73}
          height={11}
          className={styles.rotate}
        />
      )}
      {text}
      {!left && <img src={TitleDecoration} width={73} height={11} />}
    </div>
  );
};

export default SectionTitle;
