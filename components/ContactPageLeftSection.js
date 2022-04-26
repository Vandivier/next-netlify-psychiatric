import styles from "./ContactPageLeftSection.module.css";

export const ContactPageLeftSection = () => (
  <div>
    <h2>Contact Us</h2>
    <p>
      Have you read through our FAQ and service details, but I question
      persists? Please contact us using the form below.
    </p>
    <form>
      <input type="text" placeholder="Name" />
      <br />
      <br />
      <input type="text" placeholder="Email Address" />
      <br />
      <br />
      <input type="text" placeholder="Subject" />
      <br />
      <br />
      <textarea
        className={styles.contactFormTextArea}
        placeholder="How can we help?"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  </div>
);
