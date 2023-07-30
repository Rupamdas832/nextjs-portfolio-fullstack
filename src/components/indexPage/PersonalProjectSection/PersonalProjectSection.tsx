import { ProjectCard } from "@/types/Project.types";
import MobileProjectDetailCard from "./MobileProjectDetailCard";
import styles from "./Style.module.css";

interface PersonalProjectSectionProps {
  projects: ProjectCard[];
  heading: string;
}

const PersonalProjectSection = ({
  projects,
  heading,
}: PersonalProjectSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeading}>
        <h3>{heading}</h3>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => {
          return (
            <MobileProjectDetailCard
              key={project.project_id}
              project={project}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PersonalProjectSection;
