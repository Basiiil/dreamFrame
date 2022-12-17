import DreamFrame from "./components/dreamFrame/dreamFrame";
import Headers from "./components/header/header";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Headers />
      <DreamFrame />
    </div>
  );
}

export default Home;
