export type WorkCardProps = {
  work: Work;
};

export type Work = {
  id: number;
  title: string;
  description: string;
  experiences: Array<string>;
  image: string;
  company: string;
  duration: string;
  tech: Array<string>;
};
