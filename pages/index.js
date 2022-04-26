import { ContactComponent } from "@components/ContactComponent";
import { HeroHeader } from "@components/HeroHeader";
import { PageWrapper } from "@components/PageWrapper";
import { TwoColumnRow } from "@components/TwoColumnRow";

const Home = () => (
  <PageWrapper
    headTitle="Netlify Psychiatric"
    HeaderElement={HeroHeader}
    MainContent={() => (
      <>
        <TwoColumnRow
          ContentLeft={() => (
            <div>
              <img
                className="twoColumnRowImage"
                src={"/conversation.jpg"}
                style={{ height: "30vh", objectFit: "cover" }}
              />
            </div>
          )}
          ContentRight={() => (
            <div style={{ textAlign: "left" }}>
              <h3>Our Specialties</h3>
              <p>
                We specialize in elder, post-pardum, anxiety-related, and child
                care.
              </p>
              <p>
                Get answers to{" "}
                <span className="underlined">frequently asked questions</span>,
                pricing information, and further details on specific treatment
                options on <a href="/services">our services page</a>.
              </p>
            </div>
          )}
        />
        <ContactComponent />
      </>
    )}
  />
);

export default Home;
