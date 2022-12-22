import styles from "./notFound.module.css";
import GlobalButton from "../../components/globalButton/globalButton";
import Navbar from "../../components/navbar/navbar";

function NotFound() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.row}>
        <div>
          <h1 className={styles.title}>404</h1>
          <h1 className={styles.notFound}>Page Not Found</h1>
          <p className={styles.text}>
            We can’t find the page that you’re looking for.
          </p>
          <GlobalButton text="Back To Homepage" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
