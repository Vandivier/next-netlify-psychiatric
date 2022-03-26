import { AboutSection } from "@components/AboutSection";
import { ServicesOfferedShort } from "@components/ServicesOfferedShort";

import styles from "./HeroHeader.module.css";
import { TwoColumnRow } from "./TwoColumnRow";

export const HeroHeader = () => (
  <TwoColumnRow
    className={styles.hero}
    ContentLeft={() => (
      <>
        <AboutSection />
      </>
    )}
    ContentRight={() => (
      <>
        <ServicesOfferedShort />
      </>
    )}
  />
);
