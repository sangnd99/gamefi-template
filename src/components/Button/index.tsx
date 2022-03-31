import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import Shape from "assets/svg/button-style.svg";
import styles from "./Button.module.scss";

export type IVariant = "primary" | "secondary" | "outline";

export type ISize = "sm" | "md" | "full";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: IVariant;
  size?: ISize;
  shapeStyle?: boolean;
  to?: string;
  as?: string;
}

const variants: { [key in IVariant]: string } = {
  primary: styles.primary,
  secondary: styles.secondary,
  outline: styles.outline,
};

const sizes: { [key in ISize]: string } = {
  sm: styles.sm,
  md: styles.md,
  full: styles.full,
};

const Button: React.FC<IButtonProps> = (props) => {
  const {
    variant = "primary",
    size = "full",
    shapeStyle = false,
    children,
    onClick,
    to,
    as,
    ...restProps
  } = props;
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (to) {
      navigate(to);
    }
    onClick && onClick(e);
  };
  return (
    <button
      className={cn(styles.container, sizes[size], variants[variant], {
        [styles.padding]: variant === "outline",
      })}
      onClick={handleClick}
      {...(restProps as any)}
    >
      <div className={cn(styles.wrapper)}>{children}</div>
      {shapeStyle && <img src={Shape} className={styles.shape} />}
    </button>
  );
};

export default Button;
