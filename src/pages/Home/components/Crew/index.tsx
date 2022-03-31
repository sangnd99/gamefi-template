import cn from "classnames";

import styles from "./Crew.module.scss";
import { SectionTitle, SectionHeading } from "components/styles";
import { listCrew, listPartners } from "./helper";
import { randomId } from "common/functions";

interface ICrewProps {}

const Crew: React.FC<ICrewProps> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={cn(styles.container, "container")}>
        <SectionTitle text="TEAM MEMBERS" color={true} />
        <SectionHeading text="Meet The Crew" />
        <ul className={styles.list}>
          {listCrew.map(
            ({ name, position, socialMedia, avatar, width, height }) => {
              return (
                <li key={`crew-${randomId()}`}>
                  <div className={styles.card}>
                    <img
                      src={avatar}
                      alt="something"
                      width={width}
                      height={height}
                    />
                    <p className={styles.name}>{name}</p>
                    <p className={styles.position}>{position}</p>
                    <div className={styles["social-media"]}>
                      {socialMedia.map(({ Icon, link }) => {
                        return (
                          <a
                            href={link}
                            target="_blank"
                            key={`social-${randomId()}`}
                          >
                            <Icon />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            },
          )}
        </ul>
        <SectionTitle text="OUR PARTNERS" />
        <ul className={styles.partners}>
          {listPartners.map(({ link, icon, width, height }) => (
            <li key={`partner-${randomId()}`}>
              <a href={link}>
                <img src={icon} width={width} height={height} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Crew;
