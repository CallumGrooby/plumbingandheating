import React from "react";
import { HeroSection } from "../components/HeroSection";
import { Icon, TitledTextSection } from "../ultilities/ultFunctions";
import placeholderImage from "../assets/placeholders.png";
import boiler from "../assets/boiler.png";

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
    <section className="container mx-auto">
      <header className="flex flex-col justify-center items-center px-4">
        <h1 className="font-Exo text-4xl text-blue-800 my-4">
          Our Comprehensive Installation Process
        </h1>
        <h2 className="font-Exo text-xl text-blue-500">
          We provide a thorough and hassle-free installation process for your
          log burners and multi-fuel stoves.
        </h2>
      </header>

      <section className="gap-4 py-8 px-8 flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
        {processInfo.map((section, index) => (
          <React.Fragment key={index}>
            <article className="font-Exo flex flex-col items-center gap-2  w-full min-w-56 h-full shadow-md rounded-lg">
              <div className="max-h-24 max-w-24 p-2 bg-gray-100 rounded-full">
                <img
                  className="w-full h-full"
                  src={section.image}
                  alt={section.title}
                />
              </div>
              <h1 className="text-blue-800 text-2xl text-center">
                {section.title}
              </h1>
              <p className="text-blue-500 text-lg text-center">
                {section.text}
              </p>
            </article>
            {index < processInfo.length - 1 && (
              <div className="h-1 min-w-10 bg-blue-800 hidden lg:block"></div>
            )}
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};
