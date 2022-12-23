import GlobalButton from "../../../../components/globalButton/globalButton";
import styles from "./question-form.module.css";

function QuestionForm() {
  return (
    <div className={styles.question}>
      <div className={styles.container}>
        <h1 className={styles.title}>Have a question </h1>
        <p className={styles.text}>
          Fill up the Form and ou team will get back to within 24 hrs
        </p>
        <form action="">
          <input
            className={styles.inputInfo}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={styles.inputInfo}
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className={styles.inputInfo}
            type="text"
            name="phone"
            placeholder="Phone"
          />
          <textarea
            className={styles.inputInfo}
            rows={7}
            placeholder="Type your Messege"
          />
          <GlobalButton text="Send Message" />
        </form>
      </div>
    </div>
  );
}

export default QuestionForm;
