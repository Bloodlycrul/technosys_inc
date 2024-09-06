import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const GoogleMapContainer = () => {
  const container = {
    width: "100%",
    height: "600px",
    "border-radius": "10px",
  };

  const center = {
    lat: 28.64619085010746,
    lng: 77.37562703993677,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={container} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapContainer;