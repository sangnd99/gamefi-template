import cn from "classnames";

import styles from "./SectionHeading.module.scss";

interface ISectionHeadingProps {
  text: string;
  margin?: boolean;
}

const SectionHeading: React.FC<ISectionHeadingProps> = ({
  text,
  margin = true,
}) => {
  return (
    <h2 className={cn(styles.heading, { [styles.margin]: margin })}>{text}</h2>
  );
};

export default SectionHeading;
