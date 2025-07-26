import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import { Header } from "../ultilities/ultFunctions";

export const Process = ({ title, text, processInfo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="container mx-auto">
      <Header title={title} text={text} />

      <section
        className="gap-4 py-8 px-8 flex flex-row flex-wrap lg:flex-nowrap justify-center items-center"
        ref={ref}
      >
        {processInfo.map((section, index) => (
          <React.Fragment key={index}>
            {/* flex flex-col items-center gap-2  w-full min-w-56 h-full shadow-md rounded-lg */}
            <motion.article
              className="font-Exo max-w-[300px] w-full flex flex-col flex-wrap lg:flex-nowrap justify-center items-center"
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
            </motion.article>
            {index < processInfo.length - 1 && (
              <div className="h-1 min-w-10 bg-blue-800 hidden lg:block"></div>
            )}
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};
