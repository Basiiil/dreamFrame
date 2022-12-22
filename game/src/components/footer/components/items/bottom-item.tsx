import styles from "./bottom-item.module.css";

function BottomItem() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span>DreamFrame 2022- ALL rights reserved</span>
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

export default BottomItem;
