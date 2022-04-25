import styles from "./StrongLink.module.css";

export const StrongLink = ({ isExternal = true, linkTo, text }) => (
  <a
    className={styles.strongLink}
    href={linkTo}
    target={isExternal ? "_blank" : "_self"}
  >
    {text}
  </a>
);
