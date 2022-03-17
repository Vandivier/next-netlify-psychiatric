import { AboutSection } from "@components/AboutSection";
import { ServicesOfferedShort } from "@components/ServicesOfferedShort";

import styles from "./HeroHeader.module.css";

export const HeroHeader = () => (
  <>
    <div className={styles.hero}>
      <AboutSection />
      <ServicesOfferedShort />
    </div>
  </>
);
