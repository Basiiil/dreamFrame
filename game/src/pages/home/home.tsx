import React from "react";
import Navbar from "../../components/navbar";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.smallCircle}></div>
        <div className={styles.bigCircle}></div>
      </div>
      <div className={styles.content}>
        <Navbar />
        <div className={styles.box}>
          <h1 className={styles.title}>
            CYbox nft <br /> collectionS <br /> for everyone
          </h1>
          <p className={styles.description}>
            Nulla ornare sagittis placerat nunc sit tempus enim.
            <br /> Accumsan pellentesque ipsum felis tristique at proin <br />{" "}
            vel turpis.
          </p>
          <div className={styles.buttons}>
            <div className={styles.wallet}>connect wallet</div>
            <div className={styles.video}>watch video</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
