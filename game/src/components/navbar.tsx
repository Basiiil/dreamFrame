import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>Cybox</div>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.link}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/card" className={styles.link}>
              CARD
            </Link>
          </li>
          <li>WALLET</li>
        </ul>
        <div className={styles.join}>JOIN DISCORD</div>
      </div>
    </div>
  );
}

export default Navbar;
