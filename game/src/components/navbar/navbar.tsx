import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { NavbarData } from "./navbarData";
import mask from "../../assets/mask.png";
import GlobalButton from "../globalButton/globalButton";

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
          <GlobalButton text="JOIN DISCORD" />
          <GlobalButton text="BUY TOKEN" backgroundColor="#14c2a3" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
