import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>Cybox</div>
        <ul className={styles.list}>
          <li>HOME</li>
          <li>CARD</li>
          <li>WALLET</li>
        </ul>
        <div className={styles.join}>JOIN DISCORD</div>
      </div>
    </div>
  );
}

export default Navbar;
