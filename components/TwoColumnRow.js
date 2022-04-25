import styles from "./TwoColumnRow.module.css";

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
