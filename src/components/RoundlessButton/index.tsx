import { MouseEvent } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./RoundlessButton.module.scss";

type ISize = "sm" | "md";

interface IRoundlessButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  border?: boolean;
  borderWhite?: boolean;
  fillPrimary?: boolean;
  fillTertiary?: boolean;
  size?: ISize;
  to?: string;
}

const sizes: { [key in ISize]: string } = {
  sm: styles.sm,
  md: styles.md,
};

const RoundlessButton: React.FC<IRoundlessButtonProps> = ({
  children,
  fillPrimary,
  fillTertiary,
  size = "sm",
  to,
  onClick,
  border = true,
  borderWhite = false,
  ...restProps
}) => {
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (to) {
      navigate(to);
    }
    onClick && onClick(e);
  };
  return (
    <button
      className={cn(styles.container, sizes[size], {
        [styles.border]: border,
        [styles["border-white"]]: borderWhite,
        [styles["fill-primary"]]: fillPrimary,
        [styles["fill-tertiary"]]: fillTertiary,
      })}
      onClick={handleClick}
      {...(restProps as any)}
    >
      {children}
    </button>
  );
};

export default RoundlessButton;
