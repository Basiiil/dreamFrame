import styles from "./nft-item.module.css";

function NftItem({ name, image, level }) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.info}>
        <span>{name}</span>
        <span className={styles.level}>{level}</span>
      </div>
    </div>
  );
}

export default NftItem;
