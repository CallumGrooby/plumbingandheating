import React from "react";
import { HeroSection } from "../components/HeroSection";
import { FAQs } from "../components/FAQSection";

export const FAQsPage = () => {
  const questions = [
    {
      question: "What areas do you cover?",
      answer:
        "We serve Boston, Lincolnshire, and the surrounding areas, providing top-quality plumbing and heating services.",
    },
    {
      question: "Are your engineers certified?",
      answer:
        "Yes, all our engineers are fully certified and experienced, ensuring safe and professional service.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we provide 24/7 emergency repair services for urgent plumbing and heating issues.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by calling us, emailing us, or using the contact form on our website.",
    },
    {
      question: "What types of heating systems do you install?",
      answer:
        "We install various heating systems including gas boilers, oil boilers, central heating, and underfloor heating systems.",
    },
    {
      question: "Do you offer free quotes?",
      answer:
        "Yes, we offer free, no-obligation quotes for all our services. Contact us to get started.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit/debit cards, and bank transfers for your convenience.",
    },
    {
      question: "How often should I service my boiler?",
      answer:
        "We recommend servicing your boiler annually to ensure it operates efficiently and safely.",
    },
    {
      question: "Can you provide landlord safety certificates?",
      answer:
        "Yes, we provide comprehensive safety inspections and issue certificates to ensure compliance with regulations.",
    },
    {
      question: "What should I do in case of a plumbing emergency?",
      answer:
        "In case of a plumbing emergency, contact us immediately. Our team is available 24/7 to assist you.",
    },
  ];

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

      <FAQs questions={questions} />
    </>
  );
};
