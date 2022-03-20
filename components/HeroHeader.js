import { AboutSection } from "@components/AboutSection";
import { ServicesOfferedShort } from "@components/ServicesOfferedShort";

import styles from "./HeroHeader.module.css";

export const HeroHeader = () => (
  <>
    <div className={styles.hero}>
      <div className={styles.heroHalfSection}>
        <AboutSection />
      </div>
      <div className={styles.heroHalfSection}>
        <ServicesOfferedShort />
      </div>
    </div>
  </>
);
