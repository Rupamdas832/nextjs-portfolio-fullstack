import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import absoluteUrl from "next-absolute-url";

// export async function getServerSideProps(context: any) {
//   const { query, req } = context;
//   const { id } = query;
//   const { origin } = absoluteUrl(req);

//   let project = null;

//   try {
//     const res = await fetch(origin + `/projects/${id}`);
//     project = await res.json();
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: { project },
//   };
// }

// interface ProjectDetailsPageProps {
//   project: ProjectCard;
// }

const WorkListPage = () => {
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
        <h1>Works</h1>
      </div>
    </div>
  );
};

export default WorkListPage;
