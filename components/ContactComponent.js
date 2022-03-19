import { MapComponent } from "@components/MapComponent";

import styles from "./ContactComponent.module.css";

export const ContactComponent = () => (
  <>
    <h3 style={{ margin: "1rem 0 .5rem" }}>Ladderly Psychiatric</h3>
    <p className="m-pt5rem">Los Angeles, CA</p>
    <p className="m-pt5rem">P: 424-999-1111</p>
    <p className="m-pt5rem">F: 424-999-1112</p>
    <MapComponent />
    <p>TODO: Contact Form</p>
  </>
);
