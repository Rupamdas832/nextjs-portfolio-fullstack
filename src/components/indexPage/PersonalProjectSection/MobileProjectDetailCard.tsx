import { ProjectCardProps } from "../../../types/Project.types";
import styles from "./Style.module.css";
import buttonStyles from "../../../styles/button.module.css";

const MobileProjectDetailCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className={styles.projectDetailCardContainer}>
      <div className={styles.cardLeftSection}>
        <div className={styles.cardTitle}>
          <h3>{project.title}</h3>
        </div>
        <div className={styles.cardDuration}>
          <h6>{project.duration}</h6>
        </div>
        <div className={styles.cardDesc}>
          <p>{project.description}</p>
        </div>
        {/* <div className={styles.cardBadgeContainer}>
          {project.tech.map((item) => {
            return (
              <button key={item} className={buttonStyles.ghostButton}>
                {item}
              </button>
            );
          })}
        </div> */}
      </div>
      <div className={styles.cardRightSection}>
        {index === 0 && (
          <div className={styles.scrollText}>Please Scroll Inside</div>
        )}
        <div className={styles.mobileCard}>
          <div className={styles.mobileHeader}>
            <div className={styles.mobileNotch}>
              <div className={styles.mobileSpeaker}></div>
              <div className={styles.mobileFrontCamera}></div>
            </div>
          </div>
          <img
            src={project.image}
            alt={project.title}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.laptopCard}>
          <img
            src={project.landscape_image}
            alt={project.title}
            className={styles.cardImage}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileProjectDetailCard;
