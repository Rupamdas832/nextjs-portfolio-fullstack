import React, { useState } from "react";
import styles from "../styles/ContactPopup.module.css";
import buttonStyles from "../styles/button.module.css";

type ContactPopupPropType = {
  setIsModal: Function;
};

type ButtonComponentPropType = {
  text: string;
};

const ButtonComponent = ({ text }: ButtonComponentPropType) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
    navigator.clipboard.writeText(text);
  };

  return (
    <button
      className={
        isCopied ? buttonStyles.filledButton : buttonStyles.ghostButton
      }
      onClick={copyText}
    >
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
};

const ContactPopup = ({ setIsModal }: ContactPopupPropType) => {
  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsModal(false);
  };

  return (
    <div className={styles.contactPopupOverlay} onClick={closeModal}>
      <div
        className={styles.contactPopupModal}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Love to hear from you</h2>
        <h2>Get in touch👋</h2>
        <div className={styles.contactPopupBody}>
          <div className={styles.contactPopupElement}>
            <h4>8102427901</h4>
            <ButtonComponent text="8102427901" />
          </div>
          <div className={styles.contactPopupElement}>
            <h4>rupamdas832@gmail.com</h4>
            <ButtonComponent text="rupamdas832@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
