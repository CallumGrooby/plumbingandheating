import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  Marker,
} from "@vis.gl/react-google-maps";
import { HeroSection } from "../components/HeroSection";
import video from "../assets/showroom.mp4";

export const Showroom = () => {
  const openingTime = 9; // 9:00 AM
  const closingTime = 18; // 6:00 PM

  const now = new Date(2024, 5, 6, 11, 30);
  const currentHour = now.getHours();

  // Check if the store is open
  if (currentHour >= openingTime && currentHour < closingTime) {
    console.log("The store is open.");
  } else {
    console.log("Sorry, the store is closed.");
  }

  return (
    <>
      <video
        className="max-w-[1920px] mx-auto  w-full rounded-b-3xl"
        controls
        autoPlay
        muted
      >
        <source src={video} type="video/mp4" />
      </video>

      <section className="container mx-auto my-8 p-4 rounded-2xl font-Exo">
        <header>
          <h1 className=" text-4xl text-blue-800 text-center">
            Endeavour Plumbing and Heating Boston Ltd
          </h1>
          <h2 className=" text-3xl text-blue-500 text-center my-4">
            Main Road, Wrangle Boston, PE22 9AS
          </h2>
        </header>
        <div className="h-[500px]">
          <MapComponent />
        </div>
      </section>
    </>
  );
};

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
