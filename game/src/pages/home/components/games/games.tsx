import NFTArenaLogo from "../../../../assets/NFTArenaLogo.png";
import styles from "./games.module.css";
import Finalcomp from "../../../../assets/Finalcomp2-2.gif";

function Games() {
  return (
    <div className={styles.container}>
      <h1>GAME list</h1>
      <div className={styles.nftArena}>
        <img src={NFTArenaLogo} alt="NFTArenaLogo" />
        <div className={styles.btn}>play nft arena</div>
      </div>
      <div className={styles.gif}>
        <img src={Finalcomp} alt="Finalcomp" />
      </div>
      <div className={styles.text}>
        <div className={styles.describtion}>
          <span>Describtion:</span>
          <p>
            As the first DreamFrame game, NFT Arena serves as the core engine of
            DreamFrame's economic system, which is responsible for the creation
            of tokens. As a result, NFT Arena has a variety of composite
            gameplay, making it easy for users to participate and achieve P2E.
            Players can mine tokens, DF$ tokens, and NFT in the game. Further,
            the prize pool of ETH and other mainstream tokens enhances the
            game's expandability.
          </p>
        </div>
        <div className={styles.possibilities}>
          <span>Possibilities:</span>
          <ul>
            <li>Governance Token: DF$</li>
            <li>Lock-up: No</li>
            <li>Stake Pool: Yes</li>
            <li>Mining Reward: 700,000,000 DF$</li>
            <li>NFT Protocol: Yes</li>
          </ul>
          <div className={styles.button}>
            <div className={styles.btn}>play nft arena</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
