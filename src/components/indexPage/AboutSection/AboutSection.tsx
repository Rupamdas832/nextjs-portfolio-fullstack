import styles from "./AboutSection.module.css";
const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <p>
          1.5+ years of experience in React Development. Sound understanding of
          technologies such as React, Javascript, Typescript, Node, Redux, CSS,
          Socket, and deployment
        </p>
      </div>
      <div className={styles.rightSection}>
        <p>
          The combination of my passion for design and coding positions me in a
          unqiue place in web developer
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
