import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import HeroSection from "../components/indexPage/HeroSection/HeroSection";
import PersonalProjectSection from "../components/indexPage/PersonalProjectSection/PersonalProjectSection";
import WorkExperienceSection from "../components/indexPage/WorkExperienceSection/WorkExperienceSection";
import SectionDivider from "../components/SectionDivider";
import { TSkill } from "@/types/Skill.types";
import { ProjectCard } from "@/types/Project.types";
import styles from "../styles/Layout.module.css";
import Navbar from "@/components/Navbar";
import { getProjectsURL, getSkillsURL } from "@/api/apiUrls";

const fetchSkills = async (req: any) => {
  const res = await getSkillsURL(req);
  const data = await res.json();
  return data;
};

const fetchProjects = async (req: any) => {
  const res = await getProjectsURL(req, 2);
  const data = await res.json();
  return data;
};

export async function getServerSideProps(context: any) {
  const { req } = context;

  let results: any = [];
  try {
    results = await Promise.all([fetchSkills(req), fetchProjects(req)]);
  } catch (error) {
    console.log(error);
  }
  return {
    props: { skills: results[0], projects: results[1] },
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
        <link
          rel="icon"
          href="https://i.ibb.co/kxnN7tV/rupam-das-high-resolution-logo-color-on-transparent-background.webp"
        />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <HeroSection skills={skills} />
        <WorkExperienceSection />
        <SectionDivider />
        <PersonalProjectSection
          projects={projects}
          heading="Personal Projects"
        />
        <Footer />
      </main>
    </>
  );
}
