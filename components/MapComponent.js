import GoogleMapReact from "google-map-react";

import { MapMarker } from "@components/MapMarker";

export const MapComponent = () => {
  // ref: https://stackoverflow.com/questions/52248646/googlemaps-api-key-for-testing
  const stubData = {
    center: {
      lat: 39,
      lng: -92,
    },
    zoom: 4,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "40vh", paddingTop: "1rem", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={stubData.center}
        defaultZoom={stubData.zoom}
      >
        <MapMarker
          lat={34.04}
          lng={-118.45}
          onClick={() => {}}
          text="Ladderly Psychiatric"
        />
      </GoogleMapReact>
    </div>
  );
};
