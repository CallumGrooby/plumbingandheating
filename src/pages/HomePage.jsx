import React from "react";
import { HeroSection } from "../components/HeroSection";
import placeholderImage from "../assets/heroimage.png";
import { Button, ServiceArticle } from "../ultilities/ultFunctions";
import { AboutUsSection } from "../components/AboutUsSection";
import { CompanyValuesSection } from "../components/CompanyValuesSection";
import { UserReviews } from "../components/UserReviews";
import { BlogSection } from "../components/BlogSection";
import { ServicesSection } from "../components/ServicesSection";

import gasAndOil from "../assets/images/GasAndOil.jpg";
import bathRoom from "../assets/images/BathroomInstallation.jpg";
import waterLeak from "../assets/images/WaterLeak.webp";
import heroImage from "../assets/images/Boiler-Servicing.webp";
export const HomePage = () => {
  const servicesInfo = [
    {
      title: "Gas and Oil Services",
      text: "Expert installation, maintenance, and repair of gas and oil systems by Gas Safe registered engineers, ensuring safety and efficiency for your home.",
      image: gasAndOil,
    },
    {
      title: "Bathroom Installations",
      text: "Expert installation, maintenance, and repair of gas and oil systems by Gas Safe registered engineers, ensuring safety and efficiency for your home.",
      image: bathRoom,
    },
    {
      title: "Water Leak Repairs",
      text: "Detection and repair of water leaks to prevent damage and wastage, ensuring the integrity of your plumbing system.",
      image: waterLeak,
    },
  ];

  return (
    <>
      <HeroSection
        title={"Keep Your House Warm"}
        text={
          "Hassle-free, professional plumbing and heating services in Boston, Lincolnshire"
        }
        hasButtons={true}
        centered={false}
        gradient={"bg-gradient-to-r from-black to-gray-600 opacity-50"}
      />

      <ServicesSection services={servicesInfo} />
      <AboutUsSection />
      <HeroSection
        title={"Your Trusted Plumbing and Heating Experts"}
        text={"Your Trusted Plumbing and Heating Experts"}
        hasButtons={false}
        centered={true}
        gradient={"bg-gradient-to-r from-blue-200 to-blue-600 opacity-50"}
        image={heroImage}
      />

      <CompanyValuesSection />
      <UserReviews />
      <BlogSection />
    </>
  );
};
