import DreamFrame from "./components/dreamFrame/dreamFrame";
import Faqs from "./components/faqs/faqs";
import Games from "./components/games/games";
import Headers from "./components/header/header";
import Nft from "./components/nft-items/nft";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Headers />
      <DreamFrame />
      <Games />
      <Nft />
      <Faqs />
    </div>
  );
}

export default Home;
