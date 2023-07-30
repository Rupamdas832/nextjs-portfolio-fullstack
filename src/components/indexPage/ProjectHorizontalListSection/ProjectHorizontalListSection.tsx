import { ProjectCard } from "@/types/Project.types";
import styles from "./Style.module.css";
import ProjectCardComponent from "./ProjectCard";

interface ProjectHorizontalListSectionProps {
  projects: ProjectCard[];
}

const ProjectHorizontalListSection = ({
  projects,
}: ProjectHorizontalListSectionProps) => {
  return (
    <div className={styles.container}>
      {projects.map((project, idx) => {
        return (
          <ProjectCardComponent
            key={project.title}
            project={project}
            index={idx}
          />
        );
      })}
    </div>
  );
};

export default ProjectHorizontalListSection;
