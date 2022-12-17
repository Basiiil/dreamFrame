import styles from "./header.module.css";
import Navbar from "../../../../components/navbar";

function Header() {
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
            create high-quality <br /> blockchain games and <br /> comfortable
            Play2Earn
          </h1>
          <p className={styles.description}>
            DreamFrame is an Unreal-Engine based platform that <br /> allows its
            developers to create multiplayer and <br />
            multiplatform games on the blockchain
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

export default Header;
