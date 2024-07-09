import React from "react";
import { HeroSection } from "../components/HeroSection";
import { Icon, TitledTextSection } from "../ultilities/ultFunctions";
import placeholderImage from "../assets/placeholders.png";
import boiler from "../assets/boiler.png";
import { Process } from "../components/Process";

import LogBurner from "../assets/images/logburner.jpg";
import LogBurner2 from "../assets/images/logburner2.jpg";
import LogBurnerHero from "../assets/images/logburnerHero.jpg";
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
        image={LogBurner2}
      />

      <section
        className={`transition-all duration-300 w-full max-w-[1300px] mx-auto my-4`}
      >
        <TitledTextSection
          text={`Experience the ultimate in home comfort with our exquisite range of log burners and multi-fuel stoves. Whether you're seeking rustic charm or contemporary elegance, we have the perfect option to complement your space. Enjoy the soothing glow and radiant heat of a wood burning stove, creating an inviting atmosphere for relaxing evenings with family and friends. Explore our collection today and add a touch of warmth and sophistication to your home.`}
          title={"Embrace Cozy Comfort with Log Burners & Multi-fuel Stoves"}
          sectionTitle={"About Us"}
        >
          <img src={LogBurner} alt="" className="rounded-t-2xl" />
        </TitledTextSection>
      </section>

      <InstallProcess />

      <section
        className={`transition-all duration-300 w-full max-w-[1300px] mx-auto my-4`}
      >
        <TitledTextSection
          text={`Reliable, seasoned, and fully accredited. Our stove packages are installed to the highest standards by our highly qualified HETAS engineers, adhering to the strictest and safest regulations.
          Our HETAS accreditation guarantees trust and dependability for all customers, enabling you to claim your fire warranty with confidence. Upon completing your stove installation, you will receive a HETAS certificate to officially certify the fire.`}
          title={"We are Fully Qualified HETAS Registered Installers"}
          sectionTitle={"HETAs Registered"}
        >
          <img src={LogBurner2} alt="" className="rounded-t-2xl" />
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
