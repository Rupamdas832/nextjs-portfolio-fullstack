import styles from "../styles/rating.module.css";

const Rating = ({ rating = 2 }) => {
  const ratingsArray = new Array(5).fill(0);

  return (
    <div className={styles.container}>
      {ratingsArray.map((item, idx) => {
        return (
          <div
            className={
              idx >= rating ? styles.circleUnchecked : styles.circleChecked
            }
            key={idx}
          ></div>
        );
      })}
    </div>
  );
};

export default Rating;
