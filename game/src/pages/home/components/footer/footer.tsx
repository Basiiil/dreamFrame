import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span>CYBOX 2022- ALL rights reserved</span>
        <ul className={styles.list}>
          <li>Privacy</li>
          <li>Policy</li>
          <li>Cookies</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
