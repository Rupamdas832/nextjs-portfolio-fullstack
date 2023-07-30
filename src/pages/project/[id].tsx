import { useState } from "react";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ProjectCard, TComment } from "@/types/Project.types";
import absoluteUrl from "next-absolute-url";
import styles from "./singleProject.module.css";
import buttonStyles from "@/styles/button.module.css";

export async function getServerSideProps(context: any) {
  const { query, req } = context;
  const { id } = query;
  const { origin } = absoluteUrl(req);

  let project = null;
  let comments = [];

  try {
    const res = await fetch(origin + `/projects/${id}`);
    project = await res.json();
  } catch (error) {
    console.log(error);
  }

  try {
    const res = await fetch(origin + `/projects/${id}/comments`);
    comments = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: { project, commentsData: comments },
  };
}

interface ProjectDetailsPageProps {
  project: ProjectCard;
  commentsData: TComment[];
}

const ProjectDetailsPage = ({
  project,
  commentsData,
}: ProjectDetailsPageProps) => {
  const [inputName, setInputName] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState(commentsData);
  const [isLoading, setIsLoading] = useState(false);

  const postNewComment = async (newComment: TComment) => {
    const origin = window.location.origin;
    setIsLoading(true);
    try {
      const res = await fetch(origin + "/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      const data = await res.json();
      setComments((comments) => [...comments, data]);
      setInputName("");
      setInputComment("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    if (inputName !== "" && inputComment !== "") {
      const newComment: TComment = {
        project_id: project.project_id,
        name: inputName,
        text: inputComment,
      };
      postNewComment(newComment);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "4rem",
        }}
      >
        <div className={styles.projectPageHeroBanner}>
          <h1>PROJECT #{project.project_id}</h1>
        </div>
        <div className={styles.projectPageDetailsContainer}>
          <div className={styles.laptopCard}>
            <img
              src={project.landscape_image}
              alt={project.title}
              className={styles.cardImage}
            />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h1>{project.title}</h1>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h4>{project.description}</h4>
          </div>
          <div className={styles.projectPageCommentsSection}>
            <p className={styles.projectPageCommentsSectionTitle}>Comments</p>
            <div className={styles.projectPageComentInputContainer}>
              <input
                placeholder="Enter your name"
                onChange={(e) => setInputName(e.target.value)}
                value={inputName}
              />
              <textarea
                placeholder="Comment"
                onChange={(e) => setInputComment(e.target.value)}
                value={inputComment}
              />
              <button
                className={buttonStyles.filledButton}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Commenting..." : "Comment"}
              </button>
            </div>
            <div className={styles.projectPageCommentsContainer}>
              {comments.map((comment) => {
                return (
                  <div
                    key={comment.comment_id}
                    className={styles.projectPageCommentElement}
                  >
                    <div className={styles.projectPageCommentProfileImage}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEcmVfhvFlT_l3XLChINntlftzppyniOWow&usqp=CAU" />
                    </div>
                    <div>
                      <h4 className={styles.projectPageCommentProfileName}>
                        {comment.name}
                      </h4>
                      <p>{comment.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
