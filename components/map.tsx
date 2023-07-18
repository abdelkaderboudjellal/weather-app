"use client";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState, useRef } from "react";

const map = (props: any) => {
  const position: LatLngExpression = [props.lat, props.lon];
  let zoom: number = 13;

  
  return (
    <div className="m-0 overflow-hidden h-[380px] w-full">
      <MapContainer
  
        style={{ height: "380px", borderRadius: "16px" }}
        zoom={zoom}
        center={position}
        scrollWheelZoom={false}
        worldCopyJump={false}
        className="map-container"
      >
        <TileLayer
          noWrap={true}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{props.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default map;
