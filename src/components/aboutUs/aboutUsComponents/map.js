import React from "react";
import Styles from "../about.module.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

function MapSection() {
  const lng = 54.37585762735543;
  const lat = 24.45677614934833;

  return (
    <section className={`${Styles.mapSection} d-flex flex-column justify-content-between align-items-end`}>
      <div className={Styles.mapTitle}>
        <h1><span>LET'S </span> <br/>MEET</h1>
      </div>
      <div className={`${Styles.mapContainer} align-items-center align-items-lg-start justify-content-evenly d-flex flex-column flex-lg-row`}>
        <div className={`${Styles.mapInfo} d-flex justify-content-center`}>
        <div className={`${Styles.mapView}  d-flex flex-column justify-content-center`}>
                    <h3 style={{color: 'white'}}>Find us on Map</h3>
                    <div>
                    <h3 style={{color: 'var(--tercerColor)'}}><FaMapMarkerAlt/> Rep. Dom</h3>
                    <br/>
                    <p style={{color: 'white'}}>Merkez mahellassi, Seçkin Sokak, Z ofis, 2nd floor, <br/>office 231.+905457730777 <br/>Info@vulticdesign.com</p>
                    </div>
        </div>
        </div>
        <div className={Styles.mapa}>
          <Map
            mapboxAccessToken="pk.eyJ1IjoiamRhbmllbDk2IiwiYSI6ImNsYm8zZnMxZDBwNzMzcnA4M3d1azI4NGsifQ._b9EaMVWqAX0HnZChTJNIQ"
            initialViewState={{
              longitude: lng,
              latitude: lat,
              zoom: 3.5,
            }}
            style={{width:"100%", height:"100%"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker longitude={lng} latitude={lat} />
            <NavigationControl position="bottom-right" />
            <FullscreenControl />
            <GeolocateControl />
          </Map>
        </div>
      </div>
    </section>
  );
}
export default MapSection;


