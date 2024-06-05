import React, { useState } from "react";
import {
  Icon,
  SquareIcon,
  TitledTextSection,
} from "../ultilities/ultFunctions";
import placeholderImage from "../assets/heroimage.png";
import boiler from "../assets/boiler.png";

export const CompanyValuesSection = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <section className="relative">
      <ButtonGroup
        selectedButton={selectedButton}
        handleButtonClick={handleButtonClick}
      />

      <div className="pt-24 relative">
        <OurApproach selectedButton={selectedButton} />
        <WhyUs selectedButton={selectedButton} />
        <MissionStatement selectedButton={selectedButton} />
      </div>
    </section>
  );
};

const ButtonGroup = ({ selectedButton, handleButtonClick }) => {
  return (
    <nav className="flex flex-row gap-4 absolute top-0 w-full h-[80px] justify-center z-50 -translate-y-1/2">
      <Button
        handleButtonClick={handleButtonClick}
        buttonId={1}
        selectedButton={selectedButton}
        text={"Our Approach"}
      />
      <Button
        handleButtonClick={handleButtonClick}
        buttonId={2}
        selectedButton={selectedButton}
        text={"Why Us"}
      />
      <Button
        handleButtonClick={handleButtonClick}
        buttonId={3}
        selectedButton={selectedButton}
        text={"Mission Statement"}
      />
    </nav>
  );
};

const Button = ({ text, handleButtonClick, buttonId, selectedButton }) => {
  return (
    <button
      onClick={() => handleButtonClick(buttonId)}
      className={`relative max-w-[350px] max-h-[100px] h-full w-full font-Exo rounded-md text-xl 
        hover:bg-gradient-to-r from-orange-600 to-orange-400 hover:text-white transition-all duration-500 
        ${
          selectedButton === buttonId
            ? "bg-gradient-to-r from-orange-600 to-orange-400 text-white"
            : "bg-slate-100 text-blue-800"
        }`}
    >
      <span className="absolute top-0 left-0">+</span>
      <h1>{text}</h1>
    </button>
  );
};

const OurApproach = ({ selectedButton }) => {
  return (
    <section
      className={`transition-all duration-300 w-full max-w-[1300px] mx-auto
  ${selectedButton === 1 ? "block" : "hidden"}`}
    >
      <TitledTextSection
        sectionTitle={"Mission Statement"}
        title={"Nobody Woo's Clients Like We Do"}
        text={`Our mission is to deliver exceptional plumbing and heating services with a focus on customer satisfaction. 
      We strive to be Boston's leading provider, known for our reliability, professionalism, and dedication to quality.`}
      >
        <img src={placeholderImage} alt="" className="rounded-t-2xl" />
      </TitledTextSection>

      <div className="grid grid-cols-3 grid-rows-1 gap-8 py-8">
        <Icon
          icon={boiler}
          text={"Plumbing Specialists"}
          subtext={`Our Gas Safe registered engineers work intelligently to provide optimal solutions for all your plumbing and heating needs, ensuring precise and efficient execution.`}
        />
        <Icon
          icon={boiler}
          text={"Customer-Centric Approach"}
          subtext={`We prioritize our customers by taking the time to explain all aspects of your plumbing and heating systems, helping you understand how to maintain them effectively.`}
        />
        <Icon
          icon={boiler}
          text={"Industry Leaders"}
          subtext={`With over 20 years of experience, we stay ahead by integrating the latest advancements in plumbing and heating technologies, offering reliable and innovative solutions.`}
        />
      </div>
    </section>
  );
};

const WhyUs = ({ selectedButton }) => {
  return (
    <section
      className={`transition-all duration-300 w-full max-w-[1300px] mx-auto
    ${selectedButton === 2 ? "block" : "hidden"}`}
    >
      <TitledTextSection
        sectionTitle={"Why Choose Us"}
        title={"Expect the Best with Our Service"}
        text={
          "Our goal is to provide our customers with highly professional plumbing services. We pride ourselves on our reliable and friendly service that customers can trust. Our expert team are on call 24/7 for any plumbing emergency."
        }
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <SquareIcon icon={boiler} />
            <SquareIcon icon={boiler} />
          </div>
          <div className="space-y-4 mt-16">
            <SquareIcon icon={boiler} />
            <SquareIcon icon={boiler} />
          </div>
        </div>
      </TitledTextSection>
    </section>
  );
};

const MissionStatement = ({ selectedButton }) => {
  return (
    <section
      className={`transition-all duration-300 w-full max-w-[1300px] mx-auto px-4
    ${selectedButton === 3 ? "block" : "hidden"}`}
    >
      <TitledTextSection
        sectionTitle={"Mission Statement"}
        title={"Nobody Woo's Clients Like We Do"}
        text={`Our mission is to deliver exceptional plumbing and heating services with a focus on customer satisfaction. 
        We strive to be Boston's leading provider, known for our reliability, professionalism, and dedication to quality.`}
      >
        <img src={placeholderImage} alt="" className="rounded-t-2xl" />
      </TitledTextSection>

      <div className="flex lg:flex-row  flex-col py-8 gap-8 [&>*:nth-child(odd)]:flex-row-reverse lg:[&>*:nth-child(odd)]:flex-row lg:items-start items-center">
        <Icon
          icon={boiler}
          text={"Our Vision"}
          subtext={`Our vision is to be the leading provider of comprehensive plumbing and heating solutions, measured by our sustained growth and customer loyalty. We aim to continually enhance our services and offerings to meet evolving needs and exceed expectations.`}
        />
        <Icon
          icon={boiler}
          text={"Our Principles"}
          subtext={`We are commitment to Excellence: We are committed to delivering excellence in every aspect of our work, from customer service to technical expertise, ensuring the highest quality outcomes.`}
        />
        <Icon
          icon={boiler}
          text={"Our Values"}
          subtext={`->Customer satisfaction is our priority
          -> Teamwork drives our success.
          ->Community support is paramount.`}
        />
      </div>
    </section>
  );
};
