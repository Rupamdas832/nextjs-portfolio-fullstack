import { ProjectCardProps } from "../../../types/Project.types";
import styles from "./Style.module.css";

const ProjectCardComponent = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCard}>
        <img
          src={project.display_image}
          alt={project.title}
          className={styles.projectCardImage}
        />
      </div>
      <div className={styles.projectCardName}>
        <p>{project.title}</p>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
