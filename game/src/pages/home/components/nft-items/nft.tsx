import { NftData } from "./nftData";
import NftItem from "./nft-item";
import styles from "./nft.module.css";

function Nft() {
  return (
    <div>
      <p className={styles.title}>NFT Items</p>
      <div className={styles.nfts}>
        {NftData.map((nft, index) => (
          <NftItem
            key={index}
            image={nft.image}
            name={nft.name}
            level={nft.level}
            active={nft.active}
          />
        ))}
      </div>
      <div className={styles.btn}>play nft arena</div>
    </div>
  );
}

export default Nft;
