import "../../styles/globals.css";
import styles from "./about.module.css";
import HeroBanner from "@/components/HeroBanner";
import Layout from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "4rem",
        }}
      >
        <HeroBanner title="ABOUT" />
        <div className={styles.aboutPageDetailsSection}>
          <h3>Meet the Coding Chemist</h3>
          <div className={styles.aboutPageDetails}>
            <div className={styles.aboutPageDetailsLeft}>
              <div className={styles.aboutPageDetailElement}>
                <h4>Diverse Background</h4>
                <p>
                  From checmical enginerring to coding extrardinate, who says
                  transformations are just for checmicals?
                </p>
              </div>
              <div className={styles.aboutPageDetailElement}>
                <h4>Self-taught Engineer</h4>
                <p>
                  No need of an expensive degree when you have the determination
                  to teach yourself.
                </p>
              </div>
              <div className={styles.aboutPageDetailElement}>
                <h4>Experienced Developer</h4>
                <p>
                  Two years mastering React, JavaScript, and Node, creating
                  nothing but digital awesomeness.
                </p>
              </div>
            </div>
            <div className={styles.aboutPageDetailsRight}>
              <img
                src="https://i.ibb.co/khZnqQg/IMG-20230610-WA0077.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className={styles.aboutPageTransitionSection}>
          <h3>The Transition</h3>
          <div className={styles.aboutPageTransitionDetails}>
            <p className={styles.aboutPageTransitionDetailsLeft}>
              With a passion for problem-solving, embracing the world of IT was
              an irresistable challenge waiting to be conquered.
            </p>
            <p className={styles.aboutPageTransitionDetailsRight}>
              A strong foundation in checmical engineering provided the
              analytical mindset needed to excel in web development.
            </p>
          </div>
        </div>
        <div className={styles.aboutPageDetailsQuoteSection}>
          <div className={styles.aboutPageDetailsQuote}>
            <h2>
              "If plan 'A' didn't work, the alphabet has 25 more letters! Stay
              cool."
            </h2>
          </div>
        </div>
        <div className={styles.aboutPageSocialSection}>
          <div className={styles.aboutPageSocialLinks}>
            <a
              href="https://www.linkedin.com/in/rupam-das-82362a105/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/512/linkedin-circled.png"
                width="20px"
                height="20px"
              />
            </a>
            <img
              src="https://img.icons8.com/fluency/512/instagram-new.png"
              width="20px"
              height="20px"
            />
            <a
              href="https://twitter.com/RupamDas832"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/512/twitter.png"
                width="20px"
                height="20px"
              />
            </a>
          </div>
          <p>All rights reserved</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
