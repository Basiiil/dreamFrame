import styles from "./nft-item.module.css";

function NftItem({ name, image, level, active }) {
  return (
    <div className={`${styles.item} ${active && `${styles.active}`}`}>
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
