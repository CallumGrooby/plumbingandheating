import React, { useState } from "react";

export const FAQs = ({ questions }) => {
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
