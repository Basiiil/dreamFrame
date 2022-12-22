import styles from "./content.module.css";

interface ContentProps {
  className: string | boolean;
  title: string;
  description: string[];
  backgroundColor?: string;
  borderColor?: string;
  main?: boolean;
}

function Content({
  className,
  title,
  description,
  backgroundColor = "#22b78f1a",
  borderColor = "#22b78f1a",
  main = false,
}: ContentProps) {
  return (
    <div
      style={{ backgroundColor, borderColor }}
      className={`${styles.content} ${className}`}
    >
      <div>
        {!main && (
          <div>
            <div
              style={{ borderColor }}
              className={`${styles.corner} ${styles["top-left"]}`}
            ></div>
            <div
              style={{ borderColor }}
              className={`${styles.corner} ${styles["top-right"]}`}
            ></div>
            <div
              style={{ borderColor }}
              className={`${styles.corner} ${styles["bottom-left"]}`}
            ></div>
            <div
              style={{ borderColor }}
              className={`${styles.corner} ${styles["bottom-right"]}`}
            ></div>
          </div>
        )}
      </div>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {description.map((descript, index) => (
          <li key={index}>{descript}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
