import DreamFrame from "./components/dreamFrame/dreamFrame";
import Games from "./components/games/games";
import Headers from "./components/header/header";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Headers />
      <DreamFrame />
      <Games />
    </div>
  );
}

export default Home;
