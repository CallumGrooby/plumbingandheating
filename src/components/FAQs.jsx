import React, { useState } from "react";

export const FAQs = () => {
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
    <section className="container mx-auto flex flex-col flex-wrap content-center">
      <header>
        <h1 className="font-Exo text-4xl my-8 text-center text-blue-800">
          FAQs
        </h1>
      </header>

      <section className="lg:grid grid-cols-2 gap-4 gap-x-16  flex flex-col">
        {questions.map((question, index) => {
          return (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          );
        })}
      </section>
    </section>
  );
};

const Question = ({ question, answer }) => {
  const [isCollasped, setIsCollasped] = useState(true);

  return (
    <article
      className="font-Exo bg-gray-100 p-4 rounded-lg"
      onClick={() => {
        setIsCollasped(!isCollasped);
      }}
    >
      <div className="flex flex-row justify-between text-xl text-blue-800 items-center">
        <h2>{question}</h2>
        <h2
          className={`transition-all ease-in-out duration-300 text-4xl
            ${isCollasped ? "rotate-0" : "rotate-45"}`}
        >
          +
        </h2>
      </div>

      <p
        className={`transition-all duration-300 h-full overflow-hidden text-lg text-blue-500 ${
          isCollasped ? "max-h-0" : "max-h-[200px]"
        }`}
      >
        {answer}
      </p>
    </article>
  );
};
