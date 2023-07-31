import styles from "@/styles/HeroBanner.module.css";

interface HeroBannerProps {
  title: string;
}

const HeroBanner = ({ title }: HeroBannerProps) => {
  return (
    <div className={styles.heroBanner}>
      <h1>{title}</h1>
    </div>
  );
};
export default HeroBanner;
