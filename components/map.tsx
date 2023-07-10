"use client";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const map = (props: any) => {
  const position: LatLngExpression = [props.lat, props.lon];
  let zoom: number = 13;
  return (
    <div className="m-0 overflow-hidden h-[380px] w-full">
      <MapContainer
        style={{ height: "380px", borderRadius: "16px" }}
        zoom={zoom}
        center={[props.lat, props.lon]}
        scrollWheelZoom={false}
        /* loadingControl={true} */
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.lat, props.lon]}>
          <Popup>{props.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default map;
