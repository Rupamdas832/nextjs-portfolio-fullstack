import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ProjectCard } from "@/types/Project.types";
import absoluteUrl from "next-absolute-url";

export async function getServerSideProps(context: any) {
  const { query, req } = context;
  const { id } = query;
  const { origin } = absoluteUrl(req);

  let project = null;

  try {
    const res = await fetch(origin + `/projects/${id}`);
    project = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: { project },
  };
}

interface ProjectDetailsPageProps {
  project: ProjectCard;
}

const ProjectDetailsPage = ({ project }: ProjectDetailsPageProps) => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "4rem",
        }}
      >
        <div style={{ width: "50%", height: "400px" }}>
          <img src={project.landscape_image} width="100%" height="100%" />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1>{project.title}</h1>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h4>{project.description}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
