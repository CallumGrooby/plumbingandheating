import React from "react";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import placeholderImage from "../assets/placeholders.png";
import boiler from "../assets/boiler.png";
import { Header, TitledTextSection } from "../ultilities/ultFunctions";

export const OilHeatingService = () => {
  const servicesInfo = [
    {
      heading: "Oil Boiler Servicing",
      title: "Top-Quality Oil Boiler Servicing",
      text: "Regular servicing of your oil boiler is essential to maintain its efficiency and safety. Our team ensures thorough inspections and maintenance, extending the lifespan of your system and preventing unexpected breakdowns.",
      image: placeholderImage,
    },
    {
      heading: "Oil Boiler Repairs",
      title: "Prompt and Efficient Oil Boiler Repairs",
      text: "When your oil boiler encounters issues, our skilled engineers provide fast and reliable repair services. We diagnose and fix problems efficiently to restore your heating system's functionality.",
      image: placeholderImage,
    },
    {
      heading: "Oil Tank Installation and Replacement",
      title: "Comprehensive Oil Tank Solutions",
      text: "We offer expert installation and replacement of oil tanks, ensuring safe and compliant storage solutions for your heating oil. Our services cater to both new installations and upgrades of existing systems.",
      image: placeholderImage,
    },
    {
      heading: "Oil Tank Filtration System",
      title: "Ensuring Clean Oil and Smooth System Operation",
      text: "Maintaining clean oil is crucial for the efficient operation of your heating system. Our oil tank filtration services help remove impurities, preventing damage and ensuring smooth performance.",
      image: placeholderImage,
    },
    {
      heading: "Landlord Safety Certificates",
      title: "Compliance with Safety Regulations",
      text: "Landlords are required to ensure their properties meet safety standards. We provide comprehensive safety inspections and issue certificates, ensuring compliance with all relevant regulations.",
      image: placeholderImage,
    },
    {
      heading: "New Oil Heating Installations",
      title: "Installation of New Oil Heating Systems",
      text: "Our team specializes in the installation of new oil heating systems, tailored to meet your specific needs. We ensure efficient and reliable heating solutions for your home or business.",
      image: placeholderImage,
    },
  ];

  return (
    <>
      <HeroSection
        title={"Our Oil Heating Services"}
        text={"Efficient and Reliable Oil Heating Solutions for Your Home"}
        centered={false}
        hasButtons={true}
      />

      <section className="container mx-auto">
        <TitledTextSection
          sectionTitle={"Our Services"}
          title={"Comprehensive Oil Boiler Services"}
          text={`At Endeavour Plumbing and Heating, we specialize in providing top-quality oil boiler servicing and repairs to keep your heating system running efficiently and safely. Our expert team is equipped to handle all aspects of oil boiler maintenance and troubleshooting.`}
        >
          <img src={placeholderImage} alt="" className="rounded-t-2xl" />
        </TitledTextSection>
      </section>

      <ServicesSection services={servicesInfo} />
      <WhyUs />
    </>
  );
};

const WhyUs = () => {
  const sections = [
    {
      title: "OFTEC Registered",
      text: "Our highly trained engineers are certified and adhere to the highest safety standards",
    },
    {
      title: "Local Expertise",
      text: "Serving Boston, Lincolnshire, with a deep understanding of local requirements.",
    },
    {
      title: "Customer Satisfaction",
      text: "We strive to provide the best service and ensure our customers are happy.",
    },
  ];

  return (
    <section className="container mx-auto py-16">
      <Header title={"Why Choose Us?"} />

      <section className="gap-16 py-16 px-8  flex flex-col xl:flex-row [&>*:nth-child(even)]:translate-y-0  xl:[&>*:nth-child(even)]:translate-y-1/3 ">
        {sections.map((section, index) => {
          return (
            <article
              key={index}
              className="font-Exo basis-1/3 h-full flex flex-col gap-4 shadow-md rounded-3xl p-8"
            >
              <div className="max-h-20 max-w-20">
                <img src={boiler} alt="" />
              </div>

              <h1 className="text-blue-800 text-3xl">{section.title}</h1>
              <p className="text-blue-500 text-2xl">{section.text}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
};
