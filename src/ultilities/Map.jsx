import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Header } from "./ultFunctions";

export const MapSection = () => (
  <section className="container mx-auto mt-8 rounded-2xl font-Exo">
    <Header
      title={"Endeavour Plumbing and Heating Boston Ltd"}
      text={" Main Road, Wrangle Boston, PE22 9AS"}
    />

    <div className="h-[500px] my-4">
      <MapComponent />
    </div>
  </section>
);

const MapComponent = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_PUBLIC_MAP_ID;
  const position = { lat: 53.04017413848148, lng: 0.13614986830940962 };

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-full w-full flex-grow">
        <Map defaultZoom={16} defaultCenter={position} mapId={mapId}></Map>
      </div>
    </APIProvider>
  );
};
