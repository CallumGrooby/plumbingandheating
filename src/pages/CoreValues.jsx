import React, { useRef } from "react";
import { HeroSection } from "../components/HeroSection";
import { BlogSection } from "../components/BlogSection";
import { SquareIcon } from "../ultilities/ultFunctions";

import quality from "../assets/icons/quality.png";
import customer from "../assets/icons/customer-statisfaction.png";
import trust from "../assets/icons/trust.png";
import innovation from "../assets/icons/innovation.png";
import development from "../assets/icons/development.png";
import community from "../assets/icons/community.png";

import { useInView, motion } from "framer-motion";
export const CoreValues = () => {
  return (
    <>
      <HeroSection
        title={"Your Trusted Plumbing and Heating Experts"}
        text={
          "Delivering Excellence, Reliability, and Innovation in Every Project"
        }
        hasButtons={false}
        centered={true}
        gradient={"bg-gradient-to-r from-blue-200 to-blue-600 opacity-50"}
      />

      <Values />
    </>
  );
};

const Values = () => {
  const values = [
    {
      icon: quality,
      title: "Quality and Excellence",
      text: "At Endeavour Plumbing and Heating, we are committed to delivering the highest quality of service and workmanship in every project we undertake. Our team of skilled professionals ensures that each task is completed to the highest standards, providing reliable and efficient solutions for all your plumbing and heating needs.",
    },
    {
      icon: customer,
      title: "Customer Satisfaction",
      text: "Our customers are at the heart of everything we do. We strive to exceed expectations by offering personalized services, timely responses, and transparent communication. Your satisfaction is our top priority, and we work diligently to ensure you are fully satisfied with our services.",
    },
    {
      icon: trust,
      title: "Integrity and Trust",
      text: "Integrity and trust are the foundations of our business. We believe in honest, open communication and delivering on our promises. Our clients can count on us for dependable advice, fair pricing, and ethical practices in all aspects of our work.",
    },
    {
      icon: innovation,
      title: "Innovation and Improvement",
      text: "We are dedicated to continuous improvement and staying at the forefront of industry advancements. By embracing new technologies and innovative solutions, we ensure that our services are efficient, up-to-date, and environmentally friendly. Our commitment to innovation helps us provide better solutions for our customers and maintain our competitive edge.",
    },
    {
      icon: development,
      title: "Professional Development",
      text: "We invest in the continuous professional development of our team, ensuring they stay current with industry standards and advancements. Our commitment to training and education enables us to offer the best and most knowledgeable service to our clients.",
    },
    {
      icon: community,
      title: "Community Engagement",
      text: "We believe in giving back to the community that supports us. Endeavour Plumbing and Heating actively participates in local initiatives and supports community programs, reinforcing our dedication to being a responsible and involved local business.",
    },
  ];

  return (
    <section className="container mx-auto my-8 p-4 bg-gray-100 rounded-2xl">
      <header>
        <h1 className="font-Exo text-4xl text-blue-800 py-8">
          Our Core Values
        </h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          return (
            <Icon
              key={index}
              title={value.title}
              text={value.text}
              icon={value.icon}
            />
          );
        })}
      </section>
    </section>
  );
};

const Icon = ({ title, text, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-start gap-4 font-Nunito bg-gray-100 rounded-lg w-full h-full box-border p-2"
      initial={{ opacity: 0, y: 40 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.5 },
            }
          : { opacity: 0, y: 40 }
      }
    >
      <div className="max-w-[58px] max-h-[58px] bg-gray-200 rounded-full">
        <img src={icon} />
      </div>
      <div>
        <h1 className="text-xl text-blue-800">{title}</h1>
        <h1 className="text-md text-blue-500">{text}</h1>
      </div>
    </motion.div>
  );
};
