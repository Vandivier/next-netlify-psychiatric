import { AboutSection } from "@components/AboutSection";
import { ServicesOfferedShort } from "@components/ServicesOfferedShort";
import { TwoColumnRow } from "@components/TwoColumnRow";

import styles from "./HeroHeader.module.css";

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
