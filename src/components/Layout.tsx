import styles from "../styles/Layout.module.css";
import { LayoutProps } from "../types/Layout.types";
import Navbar from "./Navbar";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
