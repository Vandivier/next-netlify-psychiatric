import { ContactComponent } from "@components/ContactComponent";
import { PageWrapper } from "@components/PageWrapper";

const ContactUs = () => (
  <PageWrapper
    headTitle="Contact Us"
    MainContent={() => (
      <>
        <ContactComponent />
      </>
    )}
  />
);

export default ContactUs;
