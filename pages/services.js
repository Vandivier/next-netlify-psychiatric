import { AboutSection } from "@components/AboutSection";
import { PageWrapper } from "@components/PageWrapper";
import { ServicesOfferedShort } from "@components/ServicesOfferedShort";
import { TwoColumnRow } from "@components/TwoColumnRow";

// ref: https://refine-psychiatry.com/our-services/
const Services = () => (
  <PageWrapper
    headTitle="Services"
    MainContent={() => (
      <>
        <TwoColumnRow
          //   className={styles.hero}
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
        <TwoColumnRow
          //   className={styles.hero}
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
      </>
    )}
    withGutters={false}
  />
);

export default Services;
