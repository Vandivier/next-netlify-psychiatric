import styles from "./TopNav.module.css";

export const TopNav = () => {
  const hasLeftLink = process.env.NEXT_PUBLIC_LEFT_LINK_TEXT?.length !== 0;
  const leftLinkText = process.env.NEXT_PUBLIC_LEFT_LINK_TEXT;

  return (
    <nav className={styles.topNav}>
      {hasLeftLink && <a href="/">{leftLinkText}</a>}
      <ul className={hasLeftLink ? styles.floatRight : ""}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
