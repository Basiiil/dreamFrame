import styles from "./faqs.module.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Content from "./content";

function Faqs() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>faqs</span>
        <h3>Looking for answers?</h3>
      </div>
      <div className={styles.box}>
        <div className={styles.nft}>
          <div className={styles.title}>
            <h3>What are the NFTs?</h3>
            {/* <BsChevronUp /> */}
            <BsChevronDown className={styles.icon} />
          </div>
          <p>
            Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis.
            Nulla dapibus urna volutpat venenatis, risus faucibus.
          </p>
        </div>
        <Content title="How do i get NFTs?" />
        <Content title="How can we buy your NFTs?" />
        <Content title="Who are the team behind the project?" />
      </div>
    </div>
  );
}

export default Faqs;
