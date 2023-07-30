import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import PersonalProjectSection from "@/components/indexPage/PersonalProjectSection/PersonalProjectSection";
import { ProjectCard } from "@/types/Project.types";
import absoluteUrl from "next-absolute-url";

export async function getServerSideProps(context: any) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  let projects = [];

  try {
    const res = await fetch(origin + `/projects`);
    projects = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: { projects },
  };
}

interface WorkListPageProps {
  projects: ProjectCard[];
}

const WorkListPage = ({ projects }: WorkListPageProps) => {
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
        <PersonalProjectSection projects={projects} heading="Personal Works" />
      </div>
    </div>
  );
};

export default WorkListPage;
