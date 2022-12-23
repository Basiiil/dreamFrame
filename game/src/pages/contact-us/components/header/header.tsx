import styles from "./header.module.css";
import Navbar from "../../../../components/navbar/navbar";

function Header() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Contact Us</h1>
    </div>
  );
}

export default Header;
