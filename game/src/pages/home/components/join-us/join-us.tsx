import styles from "./join-us.module.css";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import topPattern from "../../../../assets/topPattern.png";
import bottomPattern from "../../../../assets/bottomPattern.png";

function JoinUs() {
  return (
    <div className={styles.join}>
      <img
        src={topPattern}
        alt="topPattern"
        className={styles["top-pattern"]}
      />
      <div className={styles.icons}>
        <AiOutlineTwitter className={styles.icon} />
        <BsFacebook className={styles.icon} />
        <FaTelegramPlane className={styles.icon} />
        <AiFillYoutube className={styles.icon} />
        <FaTiktok className={styles.icon} />
        <SiDiscord className={styles.icon} />
      </div>
      <div className={styles.text}>
        <h3>don’t miss out, join now for early access</h3>
        <p>
          Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida
          ut{" "}
        </p>
      </div>
      <div className={styles.subscribe}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter your email address"
        />
        <div className={styles.btn}>Subscribe</div>
      </div>
      <img
        src={bottomPattern}
        alt="bottomPattern"
        className={styles["bottom-pattern"]}
      />
    </div>
  );
}

export default JoinUs;
