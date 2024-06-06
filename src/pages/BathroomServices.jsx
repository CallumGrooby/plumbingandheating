import React from "react";
import { HeroSection } from "../components/HeroSection";
import { TitledTextSection } from "../ultilities/ultFunctions";
import placeholderImage from "../assets/placeholders.png";
import boiler from "../assets/boiler.png";

import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.webp";
import { Process } from "../components/Process";

export const BathroomServices = () => {
  const processInfo = [
    {
      title: "Bathrooms",
      text: "We provide full bathroom installations, ensuring every detail is perfect for your unique space.",
      image: boiler,
    },
    {
      title: "Wetrooms",
      text: "Our wetroom installations blend functionality and style, offering a sleek and modern solution.",
      image: boiler,
    },
    {
      title: "Ensuites",
      text: "Add a luxurious ensuite to your bedroom with our expert installation services, tailored to your needs.",
      image: boiler,
    },
    {
      title: "Cloakrooms",
      text: "Transform your cloakroom with our stylish fittings and expert craftsmanship, making the most of the space.",
      image: boiler,
    },
  ];
  return (
    <>
      <HeroSection
        centered={false}
        text={
          "We offer a complete solution from planning and design to installation. Explore our range of stylish options and let our experienced team bring your vision to life."
        }
        title={"Elevate Your Home with Exceptional Bathroom Installations"}
        hasButtons={true}
      />

      <section className={`container mx-auto my-16`}>
        <TitledTextSection
          text={`At Endeavour Plumbing and Heating, we offer a comprehensive range of bathroom installation services to transform your space into a stylish and functional retreat. From full bathroom installations to wetrooms, ensuites, and cloakrooms, our experienced team is dedicated to delivering high-quality workmanship and exceptional results.
          We understand that every home is unique, which is why we tailor our services to meet your specific needs and preferences. Our expert designers will work closely with you to bring your vision to life, offering guidance and advice every step of the way.`}
          title={"Transform Your Bathroom with Expert Installation Services"}
          sectionTitle={"Our Services"}
        >
          <img src={placeholderImage} alt="" className="rounded-t-2xl" />
        </TitledTextSection>
        <Process title={""} text={""} processInfo={processInfo} />
      </section>

      <ImageGallery />
    </>
  );
};

function ImageGrid({ images, cols }) {
  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-${
        cols / 2
      } lg:grid-cols-${cols} gap-4 mb-4`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex justify-center items-center max-w-full object-cover overflow-hidden rounded-xl`}
        >
          <img
            className="max-w-full h-auto rounded-xl hover:scale-110 transition-all duration-500 ease-in-out"
            src={image}
            alt={`Project ${index + 1}`}
          />
        </div>
      ))}
    </section>
  );
}

const ImageGallery = () => {
  const primaryImages = [image1, image2, image3, image4];

  const secondaryImages = [image5, image6, image7];

  return (
    <section className="container mx-auto">
      <header>
        <h1 className="font-Exo text-4xl text-blue-800 text-center py-8">
          Our Work
        </h1>
      </header>

      <ImageGrid images={primaryImages} cols={4} />
      <ImageGrid images={secondaryImages} cols={3} />
      <ImageGrid images={primaryImages} cols={4} />
    </section>
  );
};
