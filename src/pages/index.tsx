import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import AboutSection from "../components/indexPage/AboutSection/AboutSection";
import HeroSection from "../components/indexPage/HeroSection/HeroSection";
import PersonalProjectSection from "../components/indexPage/PersonalProjectSection/PersonalProjectSection";
import ProjectHorizontalListSection from "../components/indexPage/ProjectHorizontalListSection/ProjectHorizontalListSection";
import WorkExperienceSection from "../components/indexPage/WorkExperienceSection/WorkExperienceSection";
import SectionDivider from "../components/SectionDivider";
import { TSkill } from "@/types/Skill.types";
import { ProjectCard } from "@/types/Project.types";
import absoluteUrl from "next-absolute-url";
import styles from "../styles/Layout.module.css";
import Navbar from "@/components/Navbar";

export async function getServerSideProps(context: any) {
  const { req } = context;
  const { origin } = absoluteUrl(req);
  let skillsData = [];
  let projectsData = [];
  try {
    const res = await fetch(origin + "/skills");
    skillsData = await res.json();
  } catch (error) {
    console.log(error);
  }
  try {
    const res = await fetch(origin + "/projects");
    projectsData = await res.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props: { skills: skillsData, projects: projectsData },
  };
}

interface HomeProps {
  skills: TSkill[];
  projects: ProjectCard[];
}

export default function Home({ skills, projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Rupam Das</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <HeroSection skills={skills} />
        <ProjectHorizontalListSection projects={projects} />
        <WorkExperienceSection />
        <SectionDivider />
        <PersonalProjectSection projects={projects} />
        <Footer />
      </main>
    </>
  );
}
