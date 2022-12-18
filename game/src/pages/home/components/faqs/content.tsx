import styles from "./content.module.css";
import { BsChevronUp } from "react-icons/bs";

function Content({ title }) {
  return (
    <div className={styles.box}>
      <div>
        <div className={`${styles.corner} ${styles["top-left"]}`}></div>
        <div className={`${styles.corner} ${styles["top-right"]}`}></div>
        <div className={`${styles.corner} ${styles["bottom-left"]}`}></div>
        <div className={`${styles.corner} ${styles["bottom-right"]}`}></div>
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
        <BsChevronUp className={styles.icon} />
      </div>
    </div>
  );
}

export default Content;
