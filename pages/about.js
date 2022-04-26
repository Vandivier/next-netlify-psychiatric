import { ContactComponent } from "@components/ContactComponent";
import { PageWrapper } from "@components/PageWrapper";
import { StrongLink } from "@components/StrongLink";
import { TwoColumnRow } from "@components/TwoColumnRow";

const About = () => (
  <PageWrapper
    headTitle="About"
    MainContent={() => (
      <>
        <TwoColumnRow
          ContentLeft={() => (
            <div>
              <img
                className="twoColumnRowImage"
                src={
                  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0"
                }
              />
            </div>
          )}
          ContentRight={() => (
            <div style={{ textAlign: "left" }}>
              <h2>Dr. Patricia LaFonte</h2>
              <h3>A Board-Certified Practice of Care</h3>
              <div>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet pork loin prosciutto
                  sirloin, pork corned beef chicken hamburger tongue jowl
                  ribeye. Cupim frankfurter tri-tip, sirloin bacon porchetta
                  chicken kielbasa drumstick flank pastrami rump. Pastrami
                  andouille jerky doner, turkey short loin flank filet mignon
                  alcatra.
                </p>
                <p>
                  Tri-tip turducken porchetta, corned beef cupim shoulder boudin
                  strip steak brisket ribeye pork loin meatball. Pig shankle ham
                  burgdoggen, shoulder short loin venison t-bone buffalo corned
                  beef kevin landjaeger.
                </p>
                <p>
                  Drumstick prosciutto short loin salami cupim t-bone kevin
                  turkey. Cow hamburger leberkas ham rump meatloaf kevin
                  meatball flank pork tail capicola. Spare ribs ball tip
                  burgdoggen andouille. Pork loin short ribs ribeye beef ribs
                  prosciutto, boudin sirloin picanha jowl leberkas kielbasa
                  chislic sausage meatloaf. Tail ribeye sirloin pork chop ham
                  ground round. Andouille frankfurter capicola shank, sausage
                  filet mignon salami.
                </p>

                <StrongLink
                  linkTo="https://app2.luminello.com/some-practitioner-url"
                  text="Request a Consult"
                />
              </div>
            </div>
          )}
        />
        <ContactComponent />
      </>
    )}
  />
);

export default About;
