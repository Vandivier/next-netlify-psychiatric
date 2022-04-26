import { MapComponent } from "@components/MapComponent";
import { StrongLink } from "@components/StrongLink";

import styles from "./ContactComponent.module.css";

export const ContactComponent = ({ leftSectionOverride = null }) => (
  <section className="contact-section" style={{ width: "100%" }}>
    <MapComponent />
    <div className={styles.contactContainer}>
      <div className={styles.contactColumn}>
        <div style={{ margin: "auto", width: "67%" }}>
          {leftSectionOverride || (
            <>
              <h2>Take the Next Step for Health</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing sit amet.
                Consectetur adipiscing dolor sit amet. Consectetur adipiscing
                dolor sit amet.
              </p>

              <StrongLink
                isExternal={false}
                linkTo="/contact"
                text="Contact Us"
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.contactColumn}>
        <div style={{ margin: "auto", width: "67%" }}>
          <h2 style={{ margin: "1rem 0 .5rem" }}>Ladderly Psychiatric</h2>
          <p className="m-pt5rem">Los Angeles, CA</p>
          <p className="m-pt5rem">P: 424-999-1111</p>
          <p className="m-pt5rem">F: 424-999-1112</p>
        </div>
      </div>
    </div>
  </section>
);
