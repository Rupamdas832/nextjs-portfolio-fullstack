import styles from "../styles/Layout.module.css";
import { LayoutProps } from "../types/Layout.types";
import Navbar from "./Navbar";
import NavigationLoader from "./navigationLoader";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationLoader />
      <Navbar />
      <div>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
