import { works } from "../../../utils/Data";
import styles from "./style.module.css";
import WorkCard from "./WorkCard";

const WorkExperienceSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeading}>
        <h3>Work Experience</h3>
      </div>
      <div className={styles.worksContainer}>
        {works.map((work) => {
          return <WorkCard key={work.id} work={work} />;
        })}
      </div>
    </div>
  );
};

export default WorkExperienceSection;
