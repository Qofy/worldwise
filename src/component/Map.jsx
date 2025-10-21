/* eslint-disable react/prop-types */
import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CityContext";
import styles from "./Map.module.css";

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParam] = useSearchParams();
  const { cities = [] } = useCities();
  const maplat = searchParam.get("lat");
  const maplng = searchParam.get("lng");
  const navigate = useNavigate();

  useEffect(() => {
    if (maplat && maplng && !isNaN(maplat) && !isNaN(maplng)) {
      setMapPosition([+maplat, +maplng]);
    }
  }, [maplat, maplng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeMapCenter position={mapPosition} />
      </MapContainer>

      <button onClick={() => navigate("form")}>Add City</button>
    </div>
  );
}

function ChangeMapCenter({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.setView(position);
  }, [map, position]);
  return null;
}

export default Map;
