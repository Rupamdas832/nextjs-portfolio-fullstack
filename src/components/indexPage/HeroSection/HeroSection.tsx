import styles from "./HeroSection.module.css";
import buttonStyles from "../../../styles/button.module.css";
import Rating from "../../Rating";
import { useEffect, useState } from "react";
import ContactPopup from "../../ContactPopup";
import { TSkill } from "@/types/Skill.types";

interface HeroSectionProps {
  skills: TSkill[];
}

const HeroSection = ({ skills }: HeroSectionProps) => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className={styles.container}>
      {isModal && <ContactPopup setIsModal={setIsModal} />}
      <div className={styles.bodyContainer}>
        <p className={styles.subHeading}>👋my name is</p>
        <h1 className={styles.heading}> Rupam Das</h1>
        <h2 className={styles.title}>Frontend Developer</h2>
        <p className={styles.desc}>
          1.5+ years of experience in React Development. Sound understanding of
          technologies such as React, Javascript, Typescript, Node, Redux, CSS,
          Socket, and deployment
        </p>
        <div className={styles.buttonContainer}>
          <button className={buttonStyles.filledButton} onClick={toggleModal}>
            Lets Talk
          </button>
        </div>
      </div>
      <div className={styles.profileImageContainer}>
        <img
          src="https://i.ibb.co/f20kNH0/IMG-20221215-210337.jpg"
          alt="profileImage"
        />
      </div>
      <div className={`${styles.floatingCard} ${styles.card1}`}>
        <h4>SKILLS</h4>
        <div className={styles.skillListContainer}>
          {skills.map((skill) => {
            return (
              <div key={skill.skill_id} className={styles.skillItem}>
                <Rating rating={skill.rating} />
                <div>{skill.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.floatingCard} ${styles.card2}`}>
        <h4>EDUCATION</h4>
        <div className={styles.educationContainer}>
          <p>M.Tech - Chemical Eng. (Jadavpur University)</p>
          <p>B.Tech - Chemical Eng. (B.I.T Sindri)</p>
        </div>
      </div>
      <div className={`${styles.floatingCard} ${styles.card3}`}>
        <h4>BLOGS</h4>
        <ul className={styles.blogContainer}>
          <a
            href="https://rupamdas.hashnode.dev/integrate-paypal-checkout-in-your-react-application"
            target="_blank"
            rel="noreferrer"
          >
            <li>Paypal Integration</li>
          </a>
          <a
            href="https://rupamdas.hashnode.dev/advantage-of-html5-video-over-gif"
            target="_blank"
            rel="noreferrer"
          >
            <li>Advantage of HTML5 Video over GIF</li>
          </a>
          <a
            href="https://rupamdas.hashnode.dev/what-are-macro-and-micro-tasks-in-javascript"
            target="_blank"
            rel="noreferrer"
          >
            <li>Macro and micro-tasks in JavaScript</li>
          </a>
          <a
            href="https://rupamdas.hashnode.dev/what-is-execution-context-in-javascript"
            target="_blank"
            rel="noreferrer"
          >
            <li>What is execution context in javascript</li>
          </a>
        </ul>
      </div>
      <div className={`${styles.floatingCard} ${styles.card4}`}>
        <h4>SOCIALS</h4>
        <div className={styles.socialItem}>
          <img
            src="https://img.icons8.com/color/512/gmail.png"
            width="20px"
            height="20px"
          />
          <p>rupamdas832@gmail.com</p>
        </div>
        <div className={styles.socialItem}>
          <img
            src="https://img.icons8.com/color-glass/512/phone-disconnected.png"
            width="20px"
            height="20px"
          />
          <p>8102427901</p>
        </div>
        <div className={styles.socialItem}>
          <img
            src="https://img.icons8.com/color/512/place-marker.png"
            width="20px"
            height="20px"
          />
          <p>Jamshedpur, Jharkhand</p>
        </div>
        <div className={styles.socialItem}>
          <img
            src="https://img.icons8.com/color/512/github.png"
            width="20px"
            height="20px"
          />
          <p>
            <a
              href="https://github.com/Rupamdas832"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </div>
        <div className={styles.socialItem}>
          <img
            src="https://img.icons8.com/color/512/hashnode.png"
            width="20px"
            height="20px"
          />
          <p>
            <a
              href="https://hashnode.com/60c995ed80c5541363dd316d/dashboard/posts"
              target="_blank"
              rel="noreferrer"
            >
              Hashnode
            </a>
          </p>
        </div>
        <div className={styles.socialItem}>
          <img
            src="https://img.icons8.com/color/512/linkedin-circled.png"
            width="20px"
            height="20px"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/rupam-das-82362a105/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className={styles.socialItem}>
          <img
            src="https://img.icons8.com/fluency/512/instagram-new.png"
            width="20px"
            height="20px"
          />
          <p>Instagram</p>
        </div>
        <div className={styles.socialItem}>
          <img
            src="https://img.icons8.com/color/512/twitter.png"
            width="20px"
            height="20px"
          />
          <p>
            <a
              href="https://twitter.com/RupamDas832"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
      {/* <div className={styles.leftBadge}>
        <p>OPEN TO WORK</p>
        <div className={styles.circleBadge}></div>
      </div> */}
    </div>
  );
};

export default HeroSection;
