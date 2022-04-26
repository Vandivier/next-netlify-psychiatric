import { ServicesOfferedShort } from "@components/ServicesOfferedShort";
import { TwoColumnRow } from "@components/TwoColumnRow";

import styles from "./HeroHeader.module.css";

export const HeroHeader = () => (
  <TwoColumnRow
    className={styles.hero}
    ContentLeft={() => (
      <>
        <ServicesOfferedShort />
      </>
    )}
    ContentRight={() => (
      <div>
        <img
          className="mobile-hidden cover-image"
          src={
            "https://images.unsplash.com/photo-1551727974-8af20a3322f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
        />
      </div>
    )}
    isColored={true}
    isPadded={false}
  />
);
