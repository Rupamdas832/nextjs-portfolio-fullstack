import { useState } from "react";
import styles from "../styles/Footer.module.css";
import ContactPopup from "./ContactPopup";

const Footer = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className={styles.container}>
      {isModal && <ContactPopup setIsModal={setIsModal} />}
      <div className={styles.mainComponent} onClick={toggleModal}>
        <div className={styles.circle}></div>
        <div className={styles.hoverText}>
          <h2>{`Let's`} Work Together</h2>
        </div>
      </div>
      <div className={styles.linksConatiner}>
        <div>
          <a
            href="https://www.linkedin.com/in/rupam-das-82362a105/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Linkedin</p>
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/RupamDas832"
            target="_blank"
            rel="noreferrer"
          >
            <p>Twitter</p>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Rupamdas832"
            target="_blank"
            rel="noreferrer"
          >
            <p>Github</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/goodgradiot/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
