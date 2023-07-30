import { WorkCardProps } from "../../../types/Work.types";
import styles from "./style.module.css";
import buttonStyles from "../../../styles/button.module.css";

const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <div className={styles.workCardContainer}>
      <div className={styles.cardLeftSection}>
        <img src={work.image} alt={work.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardRightSection}>
        <div className={styles.cardHeadingSubtext}>
          <h6>{work.company}</h6>
        </div>
        <div className={styles.cardTitle}>
          <h3>{work.title}</h3>
        </div>
        <div className={styles.cardDuration}>
          <h6>{work.duration}</h6>
        </div>
        <div className={styles.cardDesc}>
          <p>{work.description}</p>
        </div>
        <ul className={styles.cardList}>
          {work.experiences.map((experience, idx) => {
            return (
              <li key={idx} className={styles.cardListItem}>
                {experience}
              </li>
            );
          })}
        </ul>
        {/* <div className={styles.cardBadgeContainer}>
          {work.tech.map((item) => {
            return (
              <button key={item} className={buttonStyles.ghostButton}>
                {item}
              </button>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default WorkCard;
