import React from "react";
import Navbar from "../../components/navbar";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}

export default Home;
