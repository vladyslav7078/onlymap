import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../app.scss";

// import { philippines1Polygons } from "../data/philippines1Polygons";
// import { philippines2Polygons } from "../data/philippines2Polygons";
// import { anguillaPolygons } from "../data/anguillaPolygons";
// import { bahamasPolygons } from "../data/bahamasPolygons";
// import { bahrainPolygons } from "../data/bahrainPolygons";
// import { belizePolygons } from "../data/belizePolygons";
// import { bonairePolygons } from "../data/bonairePolygons";
import { canada2Polygons } from "../data/canada2Polygons";
import { canada1Polygons } from "../data/canada1Polygons";

export const MainMap: FC<any> = ({ isDarkTheme }) => {
  const dbbase = [
    // philippines1Polygons,
    // philippines2Polygons,
    // anguillaPolygons,
    // bahamasPolygons,
    // bahrainPolygons,
    // belizePolygons,
    // bonairePolygons,
    canada2Polygons,
    canada1Polygons,
  ] as any;

  type activeCitiesType = {
    position: string;
    name: string;
    population: string;
  };
  const [activeCity, setActiveCity] = useState<activeCitiesType | null>(null);

  const handleCityClick = (city: any) => {
    setActiveCity(city);
  };

  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="mainmap__wrapper">
      <MapContainer
        center={[49.0238, 11.2292]}
        minZoom={window.innerWidth <= 768 ? 2 : 3}
        zoom={3}
        maxZoom={18}
        maxBounds={L.latLngBounds(L.latLng(-90, -170), L.latLng(90, 190))}
        maxBoundsViscosity={1}
        className="mainmap"
      >
        {/* main */}
        {isDarkTheme ? (
          <TileLayer url="https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg" />
        ) : (
          // main
          <TileLayer url="http://mt0.google.com/vt/lyrs=s,h&hl=en&x={x}&y={y}&z={z}&s=Ga" />
          // <TileLayer url="https://api.mapbox.com/styles/v1/mapooze/clhrs78wc002j01pnghet7uvg/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwb296ZSIsImEiOiJjbGh5d3lxZWswMDU4M251bmx0MHd4MnFwIn0.3LdPAXjgyAYXvYQKu5mtDA" />

          // prod
          // <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        )}
        {dbbase.map((_: any, idx: number) => (
          <GeoJSON
            key={idx}
            data={dbbase[idx]}
            style={(feature) => ({
              color: feature?.properties.name === selectedCity ? "red" : "red",
              weight: 2,
              opacity: 1,
              fillOpacity: 0.3,
            })}
            onEachFeature={(feature, layer) => {
              layer.on("click", handleCityClick);
            }}
          />
        ))}
        {activeCity && (
          // @ts-ignore
          <Popup position={activeCity.position}>
            <div>
              попап с будущими данными
              <h2>{activeCity.name}</h2>
              <p>Население: {activeCity.population}</p>
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};
