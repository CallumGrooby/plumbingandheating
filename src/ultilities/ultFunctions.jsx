import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Button = ({ isBlue }) => {
  return (
    <button
      className={`${
        isBlue
          ? "inset-0 bg-gradient-to-r from-blue-700 to-blue-900"
          : "inset-0 bg-gradient-to-r  from-orange-500 to-orange-600"
      } 
        text-white px-4 py-2 rounded-lg text-xl`}
    >
      Vist Our Show Room
    </button>
  );
};

export const Header = ({ title, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.header ref={ref} className="text-center">
      <motion.h1
        className="font-Exo text-3xl text-blue-800"
        initial={{ opacity: 0, x: -20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }
            : { opacity: 0, x: -20 }
        }
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-xl text-blue-500"
        initial={{ opacity: 0, x: -20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }
            : { opacity: 0, x: -20 }
        }
      >
        {text}
      </motion.p>
    </motion.header>
  );
};

export const ServiceArticle = ({ serviceInfo, isInView = true, index = 0 }) => {
  return (
    <motion.article
      className="rounded-3xl max-w-[500px] w-full box-border flex flex-col"
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
      <img src={serviceInfo.image} alt="" className="rounded-t-2xl" />
      <div className="flex flex-col gap-2  p-4 bg-gray-100 rounded-b-2xl h-full">
        {serviceInfo.heading && (
          <h2 className="font-exo text-2xl text-blue-800">
            {serviceInfo.heading}
          </h2>
        )}
        <h1 className="font-Exo text-3xl text-blue-600">{serviceInfo.title}</h1>
        <p className="font-Nunito text-lg text-gray-900">{serviceInfo.text}</p>
      </div>
    </motion.article>
  );
};

export const TitledTextSection = ({ sectionTitle, title, text, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="w-full flex flex-col xl:flex-row gap-4 basis-[calc(100%/3 - 16px)] w-full items-center justify-center"
      ref={ref}
    >
      <motion.article
        className="max-w-3xl flex flex-col gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? {
                opacity: 1,
                transition: { duration: 1 },
              }
            : { opacity: 0 }
        }
      >
        <h2 className="font-Exo text-xl text-blue-500">{sectionTitle}</h2>
        <h1 className="font-Exo text-4xl text-blue-800">{title}</h1>
        <p className="font-Nunito text-lg text-slate-900">{text}</p>
      </motion.article>

      <div className="max-w-3xl basis-[calc(100%/3 - 16px)]">{children}</div>
    </motion.section>
  );
};

export const Icon = ({ icon, text, subtext, isInView = true, index = 0 }) => {
  return (
    <motion.div
      className="flex flex-row items-start gap-2 font-Nunito basis-1/3 px-4"
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
      <div className="max-w-[100px] max-h-[100px] bg-gray-100 rounded-full">
        <img src={icon} />
      </div>
      <div className="text-blue-600">
        <h1 className="text-2xl">{text}</h1>
        <h1 className="text-lg">{subtext}</h1>
      </div>
    </motion.div>
  );
};

export const SquareIcon = ({
  icon,
  title,
  text,
  isInView = true,
  index = 0,
}) => (
  <motion.div
    className="flex flex-col items-start gap-4 font-Nunito bg-gray-100 rounded-lg max-w-[200px] max-h-[200px] w-full h-full box-border p-2"
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
    <div className="max-w-[58px] max-h-[58px] bg-gray-200 rounded-full">
      <img src={icon} />
    </div>
    <div className="text-blue-600">
      <h1 className="text-xl">{title}</h1>
      <h1 className="text-md">{text}</h1>
    </div>
  </motion.div>
);
