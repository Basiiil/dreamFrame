import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { NavbarData } from "./navbarData";
import mask from "../assets/mask.png";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.mask}>
          <img src={mask} alt="mask" />
          DreamFrame
        </div>
        <ul className={styles.list}>
          {NavbarData.map((nav) => (
            <li key={nav.title}>
              <Link to={nav.route} className={styles.link}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <div className={styles.btn}>JOIN DISCORD</div>
          <div className={`${styles.btn} ${styles.full}`}>BUY TOKEN</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
