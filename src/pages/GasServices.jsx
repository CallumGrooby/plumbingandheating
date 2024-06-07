import React, { useRef, useState } from "react";
import { HeroSection } from "../components/HeroSection";
import placeholderImage from "../assets/placeholders.png";
import boiler from "../assets/boiler.png";
import { ServicesSection } from "../components/ServicesSection";
import {
  Icon,
  SquareIcon,
  TitledTextSection,
} from "../ultilities/ultFunctions";
import { FAQs } from "../components/FAQSection";
import { useInView, motion } from "framer-motion";
export const GasServices = () => {
  const servicesInfo = [
    {
      title: "GAS BOILER SERVICE",
      text: "Domestic clients and landlords. Book in now for your annual gas boiler service. We also supply landlords gas safety certificates and other gas services.",
      image: placeholderImage,
    },
    {
      title: "CENTRAL HEATING INSTALLATION",
      text: "We provide new gas central heating installations. We also provide repairs and replacements for your existing radiators and boilers.",
      image: placeholderImage,
    },
    {
      title: "HEATING REPAIR SERVICE",
      text: "We have all the tools and parts needed to provide you with heating repairs. Our expert heating engineers will get you feeling toasty again in no time.",
      image: placeholderImage,
    },
  ];

  const questions = [
    {
      question: "How often should I service my boiler?",
      answer: "We recommend annual servicing to ensure safety and efficiency.",
    },
    {
      question: "What areas do you cover?",
      answer: "We serve Boston, Lincolnshire, and the surrounding areas.",
    },
    {
      question: "What types of heating systems do you install?",
      answer:
        "We install a variety of heating systems including gas boilers, central heating, and underfloor heating systems.",
    },
    {
      question: "Do you offer emergency repair services?",
      answer:
        "Yes, we provide 24/7 emergency repair services for urgent heating and plumbing issues.",
    },
    {
      question: "Are your engineers certified?",
      answer:
        "Yes, all our engineers are fully certified and experienced in gas safety and plumbing.",
    },
    {
      question: "Can you help with gas safety certificates?",
      answer:
        "Yes, we provide gas safety certificates for landlords and homeowners to ensure compliance with safety regulations.",
    },
    {
      question: "How can I book a service appointment?",
      answer:
        "You can book a service appointment by calling us, visiting our website, or stopping by our showroom.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including cash, credit/debit cards, and bank transfers.",
    },
    {
      question: "How long does a typical boiler installation take?",
      answer:
        "A typical boiler installation usually takes between 1 to 2 days, depending on the complexity of the job.",
    },
    {
      question: "Do you offer any warranties on your services?",
      answer:
        "Yes, we offer warranties on our installations and repairs. The duration of the warranty depends on the service provided.",
    },
  ];

  return (
    <>
      <HeroSection
        title={"Gas Engineer Services "}
        text={
          "Expert gas engineering solutions for all your heating and plumbing needs in Boston, Lincolnshire"
        }
        hasButtons={true}
        centered={false}
      />

      <ServicesSection services={servicesInfo} />
      <OurServices />
      <FAQs questions={questions} />
    </>
  );
};

const OurServices = () => {
  const servicesInfo = [
    {
      title: "Central Heating Installation",
      text: "Efficient and reliable central heating system installations.",
      icon: boiler,
    },
    {
      title: "Gas Safety Certificates",
      text: "Ensuring your property meets all gas safety regulations.",
      icon: boiler,
    },
    {
      title: "",
      text: "Professional servicing and repairs to keep your boiler running smoothly.",
      icon: boiler,
    },
    {
      title: "Gas Appliance Installation",
      text: "Safe and secure installation of all gas appliances.",
      icon: boiler,
    },
    {
      title: "Fault Finding",
      text: "Expert diagnosis and resolution of gas system issues.",
      icon: boiler,
    },
    {
      title: "LPG Gas Installation",
      text: "Safe and compliant LPG gas installation services.",
      icon: boiler,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={` w-full max-w-[1300px] mx-auto py-8  flex flex-col  items-center`}
    >
      <TitledTextSection
        sectionTitle={"Our Services"}
        title={"Comprehensive Gas Engineering Solutions"}
        text={`At Endeavour Plumbing and Heating, we offer a full range of gas engineering services for all your heating and plumbing needs. Our expert team handles central heating installations, boiler servicing and repairs, gas safety certificates, appliance installations, fault finding, power flushes, and LPG gas installations. We also provide gas hob installations and safety checks. Whether you’re a homeowner or landlord, we deliver reliable, high-quality solutions tailored to you.`}
      >
        <img src={placeholderImage} alt="" className="rounded-t-2xl" />
      </TitledTextSection>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 lg:grid-cols-3 gap-4"
        ref={ref}
      >
        {servicesInfo.map((service, index) => {
          return (
            <SquareIcon
              key={index}
              title={"Test"}
              text={"test"}
              icon={boiler}
              isInView={isInView}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};
