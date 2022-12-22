import Content from "./content";
import styles from "./timeline.module.css";

function Timeline() {
  return (
    <div>
      <div className={styles.text}>
        <span>ROADMAP</span>
        <h3>dreamframe Timeline</h3>
      </div>
      <div className={styles.timeline}>
        <div className={`${styles.container} ${styles.left}`}>
          <div
            className={`${styles.square} ${styles["square-left"]} ${styles.secondary}`}
          ></div>
          <div className={`${styles["left-line"]} ${styles.secondary}`}></div>
          <Content
            className={styles["content-left"]}
            title="Q2 2022"
            description={[
              "Aenean tempor",
              "Fusce arcu maecenas",
              "Malesuada felis sem elementum",
              "Risus eu metus",
            ]}
            backgroundColor="#4e4e561a"
            borderColor="#565660"
          />
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div
            className={`${styles.square} ${styles["square-right"]} ${styles.secondary}`}
          ></div>
          <div className={`${styles["right-line"]} ${styles.secondary}`}></div>
          <Content
            className={styles["content-right"]}
            title="Q1 2022"
            description={[
              "Release website and logo",
              "Grow community",
              "Launch the project",
              "Social media setup",
            ]}
            backgroundColor="#4e4e561a"
            borderColor="#565660"
          />
        </div>
        <div className={`${styles.container} ${styles.left}`}>
          <div
            className={`${styles.square} ${styles["square-left"]} ${styles.primary}`}
          ></div>
          <div className={`${styles["left-line"]} ${styles.primary}`}></div>
          <Content
            className={styles["content-main"]}
            title="Q4 2021"
            description={[
              "Aenean tempor",
              "Fusce arcu maecenas",
              "Malesuada felis sem elementum",
              "Risus eu metus",
            ]}
            borderColor="#22b78f"
            main={true}
          />
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div
            className={`${styles.square} ${styles["square-right"]} ${styles.primary}`}
          ></div>
          <div className={`${styles["right-line"]} ${styles.primary}`}></div>
          <Content
            className={styles["content-right"]}
            title="Q3 2021"
            description={[
              "Aenean tempor",
              "Fusce arcu maecenas",
              "Malesuada felis sem elementum",
              "Risus eu metus",
            ]}
          />
        </div>
        <div className={`${styles.container} ${styles.left}`}>
          <div
            className={`${styles.square} ${styles["square-left"]} ${styles.primary}`}
          ></div>
          <div className={`${styles["left-line"]} ${styles.primary}`}></div>
          <Content
            className={styles["content-left"]}
            title="Q2 2021"
            description={[
              "Aenean tempor",
              "Fusce arcu maecenas",
              "Malesuada felis sem elementum",
              "Risus eu metus",
            ]}
          />
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div
            className={`${styles.square} ${styles["square-right"]} ${styles.primary}`}
          ></div>
          <div className={`${styles["right-line"]} ${styles.primary}`}></div>
          <Content
            className={styles["content-right"]}
            title="Q1 2021"
            description={[
              "Aenean tempor",
              "Fusce arcu maecenas",
              "Malesuada felis sem elementum",
              "Risus eu metus",
            ]}
          />
        </div>
        <div className={`${styles.container} ${styles.left}`}>
          <div
            className={`${styles.square} ${styles["square-left"]} ${styles.primary}`}
          ></div>
          <div className={`${styles["left-line"]} ${styles.primary}`}></div>
          <Content
            className={styles["content-left"]}
            title="Q4 2021"
            description={[
              "Aenean tempor",
              "Fusce arcu maecenas",
              "Malesuada felis sem elementum",
              "Risus eu metus",
            ]}
          />
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div
            className={`${styles.square} ${styles["square-right"]} ${styles.primary}`}
          ></div>
          <div className={`${styles["right-line"]} ${styles.primary}`}></div>
          <Content
            className={styles["content-right"]}
            title="Q3 2021"
            description={[
              "Aenean tempor",
              "Fusce arcu maecenas",
              "Malesuada felis sem elementum",
              "Risus eu metus",
            ]}
          />
        </div>
        <div className={`${styles.container} ${styles.left}`}>
          <div
            className={`${styles.square} ${styles["square-left"]} ${styles.primary}`}
          ></div>
          <div className={`${styles["left-line"]} ${styles.primary}`}></div>
          <Content
            className={styles["content-left"]}
            title="Q2 2021"
            description={[
              "Aenean tempor",
              "Fusce arcu maecenas",
              "Malesuada felis sem elementum",
              "Risus eu metus",
            ]}
          />
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div
            className={`${styles.square} ${styles["square-right"]} ${styles.primary}`}
          ></div>
          <div className={`${styles["right-line"]} ${styles.primary}`}></div>
          <Content
            className={styles["content-right"]}
            title="Q1 2021"
            description={[
              "Aenean tempor",
              "Fusce arcu maecenas",
              "Malesuada felis sem elementum",
              "Risus eu metus",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
