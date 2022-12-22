import Footer from "../../components/footer/footer";
import DreamFrame from "./components/dreamFrame/dreamFrame";
import Faqs from "./components/faqs/faqs";
import Games from "./components/games/games";
import Header from "./components/header/header";
import Nft from "./components/nft-items/nft";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <DreamFrame />
      <Games />
      <Nft />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;
