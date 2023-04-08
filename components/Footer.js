import styles from "./Footer.module.css";

export const Footer = () => (
  <>
    <footer className={styles.footer}>
      {process.env.COPYRIGHT_TEXT || "©2022 All Rights Reserved"}
    </footer>
  </>
);
