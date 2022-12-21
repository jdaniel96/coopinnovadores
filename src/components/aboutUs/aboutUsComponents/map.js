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
        mapboxAccessToken="pk.eyJ1IjoiamRhbmllbDk2IiwiYSI6ImNsYm8zZnMxZDBwNzMzcnA4M3d1azI4NGsifQ._b9EaMVWqAX0HnZChTJNIQ"
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 3.5,
        }}
        style={{ width: "50%", height: "100%" }}
        mapStyle="mapbox://styles/jdaniel96/cl7rt1c04001t14mtn3jy490u"
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
