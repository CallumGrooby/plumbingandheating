import React from "react";
import { HeroSection } from "../components/HeroSection";
import placeholderImage from "../assets/heroimage.png";
import { Button, ServiceArticle } from "../ultilities/ultFunctions";
import { AboutUsSection } from "../components/AboutUsSection";
import { CompanyValuesSection } from "../components/CompanyValuesSection";
import { UserReviews } from "../components/UserReviews";
import { BlogSection } from "../components/BlogSection";
export const HomePage = () => {
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

      <ServicesSection />
      <AboutUsSection />
      <HeroSection
        title={"Your Trusted Plumbing and Heating Experts"}
        text={"Your Trusted Plumbing and Heating Experts"}
        hasButtons={false}
        centered={true}
        gradient={"bg-gradient-to-r from-blue-200 to-blue-600 opacity-50"}
      />

      <CompanyValuesSection />
      <UserReviews />
      <BlogSection />
    </>
  );
};

const ServicesSection = () => {
  const Services = [
    {
      title: "Gas and Oil Services",
      text: "Expert installation, maintenance, and repair of gas and oil systems by Gas Safe registered engineers, ensuring safety and efficiency for your home.",
      image: placeholderImage,
    },
    {
      title: "Bathroom Installations",
      text: "Expert installation, maintenance, and repair of gas and oil systems by Gas Safe registered engineers, ensuring safety and efficiency for your home.",
      image: placeholderImage,
    },
    {
      title: "Water Leak Repairs",
      text: "Detection and repair of water leaks to prevent damage and wastage, ensuring the integrity of your plumbing system.",
      image: placeholderImage,
    },
  ];

  return (
    <section className="container mx-auto">
      <header className="flex flex-col flex-wrap content-center">
        <h1 className="font-Exo text-4xl my-8">What Can We Help You With?</h1>
      </header>

      {/* flex flex-col lg:flex-row lg:flex-nowrap flex-wrap container gap-4 mx-auto content-center justify-between */}
      <div className="flex items-center justify-center">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Services.map((serviceInfo, index) => {
            return <ServiceArticle key={index} serviceInfo={serviceInfo} />;
          })}
        </section>
      </div>
    </section>
  );
};
