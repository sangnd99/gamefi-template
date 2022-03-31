import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import { navList } from "./helper";
import { randomId } from "common/functions";
import ConnectWallet from "./ConnectWallet";

import Logo from "assets/svg/logo.svg";

import styles from "./Header.module.scss";
import Hamburger from "assets/svg/hamburger.svg";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const [isTransparent, setTransparent] = useState(true);
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);
  const handleTransitionEnd = () => {
    if (!show) setRender(false);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", handleUserScrolling);
    return () => {
      window.removeEventListener("scroll", handleUserScrolling);
    };
  }, [show]);

  const handleUserScrolling = () => {
    if (wrapperRef && wrapperRef.current) {
      const BOUNDARY_OF_TRANSPARANT_BG = wrapperRef.current.clientHeight;
      const scrollPosition = document.documentElement.scrollTop;
      if (scrollPosition > BOUNDARY_OF_TRANSPARANT_BG) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    }
  };

  return (
    <div
      className={cn(styles.wrapper, {
        [styles["set-background"]]: show ? true : !isTransparent,
        [styles.extend]: show,
      })}
      ref={wrapperRef}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={cn(styles.container, { ["container"]: true })}>
        <img
          className={styles["mobile-logo"]}
          src={Logo}
          width={220}
          alt="Tobe Game Logo"
        />
        <nav className={styles.navigation}>
          <img src={Logo} width={220} alt="Tobe Game Logo" />
          <ul className={styles["list-nav"]}>
            {navList.map(({ link, name }) => (
              <li key={`header-navigation-${randomId()}`}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles["connect-wallet"]}>
          <ConnectWallet />
        </div>
        <div className={styles.hamburger} onClick={() => setShow(!show)}>
          <img src={Hamburger} width={30} height={30} />
        </div>
      </div>
      {render && (
        <ul
          className={styles["mobile-navigation"]}
          onTransitionEnd={handleTransitionEnd}
        >
          {navList.map(({ link, name }) => (
            <li key={`mobile-navigation-${randomId()}`}>
              <Link to={link}>
                <div className={styles["nav-button"]}>{name}</div>
              </Link>
            </li>
          ))}
          <ConnectWallet />
        </ul>
      )}
    </div>
  );
};

export default Header;
