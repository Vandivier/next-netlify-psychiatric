import styles from "./MapMarker.module.css";

// ref: https://github.com/google-map-react/google-map-react/blob/a783cd62767f824a6eb072e523c8d06ea660c7ee/example/src/components/Marker.js
export const MapMarker = ({ text, onClick }) => (
  <>
    <div className={styles.mapPin} />
    <div alt={text} className={styles.mapMarkerDialog} onClick={onClick}>
      {text}
    </div>
  </>
);
