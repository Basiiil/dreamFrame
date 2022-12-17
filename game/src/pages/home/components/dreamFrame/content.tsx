import styles from "./content.module.css";

function Content({ title, description }) {
  return (
    <div className={styles.box}>
      <div>
        <div className={`${styles.corner} ${styles["top-left"]}`}></div>
        <div className={`${styles.corner} ${styles["top-right"]}`}></div>
        <div className={`${styles.corner} ${styles["bottom-left"]}`}></div>
        <div className={`${styles.corner} ${styles["bottom-right"]}`}></div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Content;
