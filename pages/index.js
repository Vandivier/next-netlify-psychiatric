import { ContactComponent } from "@components/ContactComponent";
import { HeroHeader } from "@components/HeroHeader";
import { PageWrapper } from "@components/PageWrapper";

const Home = () => (
  <PageWrapper
    headTitle="Netlify Psychiatric"
    HeaderElement={HeroHeader}
    MainContent={() => (
      <>
        <ContactComponent />
      </>
    )}
  />
);

export default Home;
