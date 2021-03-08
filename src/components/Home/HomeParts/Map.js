import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ coord, name }) => {
  const defaultProps = {
    center: {
      lat: coord.lat && coord.lat,
      lng: coord.lon && coord.lon,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBTy_eMKFPL0lFI5mTyPwr7KrS6cGX1q2A" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={coord.lat && coord.lat}
          lng={coord.lon && coord.lon}
          text={name}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
