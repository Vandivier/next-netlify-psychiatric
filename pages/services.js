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
            <>
              <h3>Our Specialties</h3>
              <TwoColumnRow
                className="textAlignLeft"
                ContentLeft={() => (
                  <>
                    <h4>Adults</h4>
                    <ul className="list-style-none m-0 p-0">
                      <li>Depression</li>
                      <li>Anxiety and OCD</li>
                      <li>ADHD</li>
                      <li>Maternal Mental Health </li>
                      <li>PTSD </li>
                      <li>Bipolar Disorder</li>
                      <li>Schizophrenia</li>
                    </ul>
                  </>
                )}
                ContentRight={() => (
                  <>
                    <h4>Children</h4>
                    <ul className="list-style-none m-0 p-0">
                      <li>Depression</li>
                      <li>Anxiety and OCD</li>
                      <li>ADHD</li>
                      <li>Autism Spectrum Disorder</li>
                      <li>Impulse Control Disorders</li>
                      <li>Oppositional Defiant Disorder</li>
                      <li>Behavioral and Impulse Control Disorders</li>
                      <li>Bipolar Disorder</li>
                      <li>Psychosis</li>
                    </ul>
                  </>
                )}
              />
            </>
          )}
        />
        <TwoColumnRow
          ContentLeft={() => (
            <div className="textAlignLeft">
              <h3>SERVICES</h3>
              <p>
                Bacon ipsum dolor amet t-bone pig pork belly, alcatra swine rump
                strip steak drumstick pork chop doner short loin prosciutto
                picanha. Short loin meatloaf jerky ham boudin shoulder short
                ribs burgdoggen filet mignon sirloin frankfurter cupim.
                Landjaeger pancetta meatball turkey frankfurter, t-bone meatloaf
                kielbasa biltong tail cow. Tongue beef jowl shoulder tri-tip.
              </p>
              <h3>FEES</h3>
              <p>
                Bacon ipsum dolor amet t-bone pig pork belly, alcatra swine rump
                strip steak drumstick pork chop doner short loin prosciutto
                picanha. Short loin meatloaf jerky ham boudin shoulder short
                ribs burgdoggen filet mignon sirloin frankfurter cupim.
                Landjaeger pancetta meatball turkey frankfurter, t-bone meatloaf
                kielbasa biltong tail cow. Tongue beef jowl shoulder tri-tip.
              </p>
              <h3>Adolescent Initial Evaluation</h3>
              <p>$800</p>
              <h3>Adult Initial Evaluation</h3>
              <p>$600</p>
              <h3>Follow-up Appointment</h3>
              <p>$300</p>
              <button>Request a Consult</button>
            </div>
          )}
          ContentRight={() => (
            <div>
              <img
                className="mobile-hidden twoColumnRowImage"
                src={
                  "https://images.unsplash.com/photo-1551727974-8af20a3322f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }
              />
            </div>
          )}
          isColored={true}
        />
      </>
    )}
    withGutters={false}
  />
);

export default Services;
