import "../../styles/globals.css";
import PersonalProjectSection from "@/components/indexPage/PersonalProjectSection/PersonalProjectSection";
import { ProjectCard } from "@/types/Project.types";
import styles from "./works.module.css";
import HeroBanner from "@/components/HeroBanner";
import { originUrl } from "@/api/apiUrls";
import Layout from "@/components/Layout";

export async function getServerSideProps(context: any) {
  const { req } = context;

  let projects = [];

  try {
    const res = await fetch(originUrl + `/projects`);
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
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "4rem",
        }}
      >
        <HeroBanner title="PROJECTS" />
        <PersonalProjectSection projects={projects} heading="" />
      </div>
    </Layout>
  );
};

export default WorkListPage;
