import { ContactComponent } from "@components/ContactComponent";
import { ContactPageLeftSection } from "@components/ContactPageLeftSection";
import { PageWrapper } from "@components/PageWrapper";

const ContactUs = () => (
  <PageWrapper
    headTitle="Contact Us"
    MainContent={() => (
      <ContactComponent leftSectionOverride={<ContactPageLeftSection />} />
    )}
  />
);

export default ContactUs;
