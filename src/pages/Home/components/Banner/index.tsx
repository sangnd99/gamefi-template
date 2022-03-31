import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import cn from "classnames";

import styles from "./Banner.module.scss";

import Background from "assets/images/slider.jpg";
import RoundlessButton from "components/RoundlessButton";
import Process from "./components/Process";

interface IBannerProps {}

const Banner: React.FC<IBannerProps> = (props) => {
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: (_, className) => {
            return `<span class="${className}" /></span>`;
          },
        }}
      >
        <SwiperSlide>
          <div
            className={styles.wrapper}
            style={{ background: `url(${Background})` }}
          >
            <div className={styles.introduce}>
              <h1 className={styles.heading}>TOBE GAME Launcepad</h1>
              <p className={styles.description}>
                The next generation gaming ecosystem for IGOs and NFT{" "}
              </p>
              <RoundlessButton fillPrimary={true} border={false}>
                Explore IGO
              </RoundlessButton>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.wrapper}
            style={{ background: `url(${Background})` }}
          >
            <div className={styles.introduce}>
              <h1 className={styles.heading}>TOBE GAME Launcepad</h1>
              <p className={styles.description}>
                The next generation gaming ecosystem for IGOs and NFT{" "}
              </p>
              <RoundlessButton fillPrimary={true} border={false}>
                Explore IGO
              </RoundlessButton>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.wrapper}
            style={{ background: `url(${Background})` }}
          >
            <div className={styles.introduce}>
              <h1 className={styles.heading}>TOBE GAME Launcepad</h1>
              <p className={styles.description}>
                The next generation gaming ecosystem for IGOs and NFT{" "}
              </p>
              <RoundlessButton fillPrimary={true} border={false}>
                Explore IGO
              </RoundlessButton>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.wrapper}
            style={{ background: `url(${Background})` }}
          >
            <div className={styles.introduce}>
              <h1 className={styles.heading}>TOBE GAME Launcepad</h1>
              <p className={styles.description}>
                The next generation gaming ecosystem for IGOs and NFT{" "}
              </p>
              <RoundlessButton fillPrimary={true} border={false}>
                Explore IGO
              </RoundlessButton>
            </div>
          </div>
        </SwiperSlide>
        <div className={cn("swiper-pagination", styles["custom-pagination"])} />
      </Swiper>
      <Process />
    </section>
  );
};

export default Banner;
