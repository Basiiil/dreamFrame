import styles from "./content.module.css";

function Content({ title, description }) {
  return (
    <div className={styles.box}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Content;
