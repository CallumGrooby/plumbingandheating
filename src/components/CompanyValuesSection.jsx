import React, { useRef, useState } from "react";
import {
  Icon,
  SquareIcon,
  TitledTextSection,
} from "../ultilities/ultFunctions";
import placeholderImage from "../assets/heroimage.png";
import boiler from "../assets/boiler.png";
import plumbing from "../assets/icons/plumbing.png";
import customerStatisfaction from "../assets/icons/customer-statisfaction.png";
import industryLeaders from "../assets/icons/industry-leaders.png";
import vision from "../assets/icons/vision.png";
import principles from "../assets/icons/principles.png";
import values from "../assets/icons/values.png";
import ourApproachImage from "../assets/images/boiler.webp";
import missionStatementImage from "../assets/images/oilheatingsystem.jpg";
import { motion, useInView } from "framer-motion";

export const CompanyValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <section className="relative" ref={ref}>
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <nav
      className="flex flex-row gap-4 absolute top-0 w-full h-[80px] justify-center z-50 -translate-y-1/2"
      ref={ref}
    >
      <Button
        handleButtonClick={handleButtonClick}
        buttonId={1}
        selectedButton={selectedButton}
        text={"Our Approach"}
        isInView={isInView}
        index={0}
      />
      <Button
        handleButtonClick={handleButtonClick}
        buttonId={2}
        selectedButton={selectedButton}
        text={"Why Us"}
        isInView={isInView}
        index={1}
      />
      <Button
        handleButtonClick={handleButtonClick}
        buttonId={3}
        selectedButton={selectedButton}
        text={"Mission Statement"}
        isInView={isInView}
        index={2}
      />
    </nav>
  );
};

const Button = ({
  text,
  handleButtonClick,
  buttonId,
  selectedButton,
  isInView = true,
  index = 0,
}) => {
  return (
    <motion.button
      onClick={() => handleButtonClick(buttonId)}
      className={`relative max-w-[350px] max-h-[100px] h-full w-full font-Exo rounded-md text-xl 
        hover:bg-gradient-to-r from-orange-600 to-orange-400 hover:text-white transition-all duration-500 
        ${
          selectedButton === buttonId
            ? "bg-gradient-to-r from-orange-600 to-orange-400 text-white"
            : "bg-slate-100 text-blue-800"
        }`}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.2, duration: 0.5 },
            }
          : { opacity: 0, y: 20 }
      }
    >
      <span className="absolute top-0 left-0">+</span>
      <h1>{text}</h1>
    </motion.button>
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
        title={"The Gold Standard in Plumbing and Heating"}
        text={`At the heart of our service is a commitment to excellence, innovation, and customer satisfaction. We combine decades of industry experience with cutting-edge technology to deliver reliable and efficient plumbing and heating solutions. Our dedicated team of Gas Safe registered engineers ensures you receive top-notch service with a personal touch. Here's how we make a difference:`}
      >
        <img src={ourApproachImage} alt="" className="rounded-t-2xl" />
      </TitledTextSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-8 p-8 ">
        <Icon
          icon={plumbing}
          text={"Plumbing Specialists"}
          subtext={`Our Gas Safe registered engineers work intelligently to provide optimal solutions for all your plumbing and heating needs, ensuring precise and efficient execution.`}
          index={0}
        />
        <Icon
          icon={customerStatisfaction}
          text={"Customer-Centric Approach"}
          subtext={`We prioritize our customers by taking the time to explain all aspects of your plumbing and heating systems, helping you understand how to maintain them effectively.`}
          index={1}
        />
        <Icon
          icon={industryLeaders}
          text={"Industry Leaders"}
          subtext={`With over 20 years of experience, we stay ahead by integrating the latest advancements in plumbing and heating technologies, offering reliable and innovative solutions.`}
          index={2}
        />
      </div>
    </section>
  );
};

const WhyUs = ({ selectedButton }) => {
  const squareIconData = [
    {
      icon: boiler,
      title: "Expert Craftsmanship",
      text: "Our team of highly skilled, Gas Safe registered engineers is dedicated to delivering the highest quality of work, ensuring your systems are both safe and efficient.",
    },
    {
      icon: boiler,
      title: "Unmatched Customer Service",
      text: "We put our customers at the center of everything we do. From the initial consultation to the final service, we ensure you are informed and satisfied every step of the way.",
    },
    {
      icon: boiler,
      title: "Cutting-Edge Technology",
      text: "We leverage the latest advancements in plumbing and heating technologies to provide you with innovative and reliable solutions that save you time and money.",
    },
    {
      icon: boiler,
      title: "20+ Years of Experience",
      text: "With over two decades of experience in the industry, we have the knowledge and expertise to tackle any plumbing or heating challenge with confidence and precision.",
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 h-full">
          {squareIconData.map((item, index) => (
            <SquareIcon
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
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
        title={"Visionary Plumbing and Heating Solutions"}
        text={`At the core of our mission is a drive to lead the industry with comprehensive plumbing and heating solutions. 
          We focus on sustained growth and building customer loyalty by continually enhancing our services to meet and exceed evolving expectations.
          Our commitment to excellence ensures top-quality outcomes, driven by a dedicated team and a customer-first approach.
          Here's how our vision, principles, and values guide us:`}
      >
        <img src={missionStatementImage} alt="" className="rounded-t-2xl" />
      </TitledTextSection>

      {/* [&>*:nth-child(odd)]:flex-row-reverse lg:[&>*:nth-child(odd)]:flex-row lg:items-start items-center */}
      <div className="flex lg:flex-row  flex-col py-8 gap-8">
        <Icon
          icon={vision}
          text={"Our Vision"}
          subtext={`Our vision is to be the leading provider of comprehensive plumbing and heating solutions, measured by our sustained growth and customer loyalty. We aim to continually enhance our services and offerings to meet evolving needs and exceed expectations.`}
        />
        <Icon
          icon={principles}
          text={"Our Principles"}
          subtext={`We are commitment to Excellence: We are committed to delivering excellence in every aspect of our work, from customer service to technical expertise, ensuring the highest quality outcomes.`}
        />
        <Icon
          icon={values}
          text={"Our Values"}
          subtext={`Customer satisfaction is our priority.
          Teamwork drives our success.
          Community support is paramount.`}
        />
      </div>
    </section>
  );
};
