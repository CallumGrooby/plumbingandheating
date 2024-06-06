import React from "react";
import { HeroSection } from "../components/HeroSection";
import { Icon, TitledTextSection } from "../ultilities/ultFunctions";
import placeholderImage from "../assets/placeholders.png";
import boiler from "../assets/boiler.png";
import { Process } from "../components/Process";

export const StovesSection = () => {
  return (
    <>
      <HeroSection
        centered={false}
        text={
          "There's nothing like the cosy vibes & the glow of your own wood burning stove and all this is available from Endeavour Plumbing and Heating Boston Ltd!"
        }
        title={"Log Burners & Multi-fuel stoves"}
        hasButtons={true}
      />

      <section
        className={`transition-all duration-300 w-full max-w-[1300px] mx-auto `}
      >
        <TitledTextSection
          text={`Our team proudly offers an on-time guarantee and a 100% customer satisfaction guarantee.
          It's why we make sure that our licensed plumbers are highly trained and fully equipped to meet your home's diverse plumbing service needs.`}
          title={"Nobody Woo's Clients Like We Do"}
          sectionTitle={"About Us"}
        >
          <img src={placeholderImage} alt="" className="rounded-t-2xl" />
        </TitledTextSection>
      </section>

      <InstallProcess />

      <section
        className={`transition-all duration-300 w-full max-w-[1300px] mx-auto `}
      >
        <TitledTextSection
          text={`Reliable, seasoned, and fully accredited. Our stove packages are installed to the highest standards by our highly qualified HETAS engineers, adhering to the strictest and safest regulations.
          Our HETAS accreditation guarantees trust and dependability for all customers, enabling you to claim your fire warranty with confidence. Upon completing your stove installation, you will receive a HETAS certificate to officially certify the fire.`}
          title={"We are Fully Qualified HETAS Registered Installers"}
          sectionTitle={"HETAs Registered"}
        >
          <img src={placeholderImage} alt="" className="rounded-t-2xl" />
        </TitledTextSection>
      </section>
    </>
  );
};

const InstallProcess = () => {
  const processInfo = [
    {
      title: "On Site Survey",
      text: "We will begin with an on-site survey to discuss your requirements.",
      image: boiler,
    },
    {
      title: "Quotation",
      text: "Based on our initial survey, we will provide a quotation and offer a range of products.",
      image: boiler,
    },
    {
      title: "Installation",
      text: "We will install your stove on a pre-arranged date at a time that suits you. ",
      image: boiler,
    },
    {
      title: "After Care",
      text: "We offer maintenance visits to keep your stove in order and safety compliant.",
      image: boiler,
    },
  ];

  return (
    <Process
      title={"Our Comprehensive Installation Process"}
      text={
        "We provide a thorough and hassle-free installation process for yourlog burners and multi-fuel stoves."
      }
      processInfo={processInfo}
    />
  );
};
