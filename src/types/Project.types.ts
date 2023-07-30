export type ProjectCard = {
  project_id: number;
  title: string;
  image: string;
  landscape_image: string;
  display_image: string;
  link: string;
  description: string;
  tech: Array<string>;
  duration: string;
};

export type ProjectCardProps = {
  project: ProjectCard;
  index: number;
};
