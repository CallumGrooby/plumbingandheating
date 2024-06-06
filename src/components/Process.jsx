import React from "react";

export const Process = ({ title, text, processInfo }) => {
  return (
    <section className="container mx-auto">
      <header className="flex flex-col justify-center items-center px-4">
        <h1 className="font-Exo text-4xl text-blue-800 my-4">{title}</h1>
        <h2 className="font-Exo text-xl text-blue-500">{text}</h2>
      </header>

      <section className="gap-4 py-8 px-8 flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
        {processInfo.map((section, index) => (
          <React.Fragment key={index}>
            {/* flex flex-col items-center gap-2  w-full min-w-56 h-full shadow-md rounded-lg */}
            <article className="font-Exo max-w-[300px] w-full flex flex-col flex-wrap lg:flex-nowrap justify-center items-center">
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
              <p className="text-blue-500 text-lg text-center h-full">
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
