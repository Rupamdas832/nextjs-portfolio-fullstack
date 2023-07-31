import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img
            src="https://i.ibb.co/kxnN7tV/rupam-das-high-resolution-logo-color-on-transparent-background.webp"
            alt="logo"
          />
        </Link>
      </div>
      <div className={styles.navElementsContainer}>
        <div className={styles.navElements}>
          <Link href="/works">Works</Link>
        </div>
        <div className={styles.navElements}>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
