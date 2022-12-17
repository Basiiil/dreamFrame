import Content from "./content";
import styles from "./dreamFrame.module.css";

function DreamFrame() {
  return (
    <div className={styles.dreamFrame}>
      <div className={styles.box}>
        <div className={styles.core}>
          <h3>Core of DreamFrame</h3>
          <div>
            <span>Three things define DreamFrame:</span>
            <span>
              1)Developing the infrastructure for the distribution of blockchain
              games
            </span>
            <span>
              2) Development and distribution of high-quality blockchain games
            </span>
            <span>3) Development of native GameFi and NFTFi products</span>
          </div>
        </div>

        <Content
          title="DreamFrame's position"
          description="We are the world's leading platform for distributing blockchain games"
        />

        <Content
          title="DreamFrame's Vision"
          description="Bringing blockchain games to life"
        />

        <Content
          title="DreamFrame's Stake"
          description="Provides stake pools for more investment stats"
        />

        <Content
          title="DreamWorld's Mission"
          description="Serving global players of blockchain games and companies"
        />
      </div>
    </div>
  );
}

export default DreamFrame;
