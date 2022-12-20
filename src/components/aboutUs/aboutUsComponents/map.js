import React from "react";
import Styles from "../about.module.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";

function MapSection() {
  const lng = 54.37585762735543;
  const lat = 24.45677614934833;

  return (
    <section className={`${Styles.mapSection} d-flex`}>
      <div className={Styles.mapInfo}></div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYXJlY2hlMTAiLCJhIjoiY2xidjhwamJwMDlnNjN3bXJ3MmJsem54YSJ9.IBaUfEDiOQq5lVKIxwxpsA"
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 3.5,
        }}
        style={{ width: "50%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
      </Map>
    </section>
  );
}
export default MapSection;
