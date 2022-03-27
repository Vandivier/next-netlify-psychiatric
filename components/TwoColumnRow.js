import styles from "./TwoColumnRow.module.css";

/* <div className={styles.hero}> */
// TODO: array of content elements to allow more than two cols?
export const TwoColumnRow = ({
  className,
  ContentLeft,
  ContentRight,
  isColored = false,
}) => (
  <section
    className={`${className} ${styles.container} ${
      isColored ? "rowColored" : "rowWhite"
    }`}
  >
    <div className={styles.row}>
      {ContentLeft ? (
        <div className={styles.column}>
          <ContentLeft />
        </div>
      ) : null}
      {ContentRight ? (
        <div className={styles.column}>
          <ContentRight />
        </div>
      ) : null}
    </div>
  </section>
);
