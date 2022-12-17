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
          title="DreamFrame's Stake"
          description="Provides stake pools for more investment stats"
        />

        <div>3333333333333</div>
        <div>44444444444</div>
        <div>555555555</div>
      </div>
    </div>
  );
}

export default DreamFrame;
