import styles from "./contact-us.module.css";
import Footer from "../../components/footer/footer";
import Header from "./components/header/header";
import Location from "./components/location/location";
import QuestionForm from "./components/question-form/question-form";

function ContactUs() {
  return (
    <div>
      <Header />
      <div className={styles.contact}>
        <QuestionForm />
        <Location />
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
