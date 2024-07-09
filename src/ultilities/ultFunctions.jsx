import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PlaceholderImage from "../assets/placeholders.png";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

export const Button = ({ isBlue, link, text }) => {
  return (
    <Link
      to={link}
      className={`${
        isBlue
          ? "inset-0 bg-gradient-to-r from-blue-700 to-blue-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700"
          : "inset-0 bg-gradient-to-r  from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500"
      } 
        text-white px-4 py-2 rounded-lg text-xl`}
    >
      {text}
    </Link>
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

export const Logo = () => (
  <div className="flex items-center">
    <img src={logo} alt="Logo" className="h-14 xl:h-16 mr-1 xl:mr-3" />
    <h1 className="text-2xl xl:text-4xl font-bold text-white font-Exo">
      Endeavour
    </h1>
  </div>
);

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
      <img
        src={serviceInfo.image}
        alt=""
        className="rounded-t-2xl min-h-[340px] object-cover"
      />
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
      className="container mx-auto w-full flex flex-col xl:flex-row gap-4 basis-[calc(100%/3 - 16px)] w-full items-center justify-center h-full"
      ref={ref}
    >
      <motion.article
        className="basis-1/2 flex flex-col gap-4 justify-center h-full"
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

      <div className="basis-1/2">{children}</div>
    </motion.section>
  );
};

export const Icon = ({ icon, text, subtext, isInView = true, index = 0 }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-4 font-Nunito basis-1/3 px-4 md:items-start"
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
      <div className="w-full max-w-[80px] max-h-[80px] bg-gray-100 rounded-full">
        <img src={icon} />
      </div>
      <div className="text-blue-600 flex-grow">
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
    className="flex flex-col items-start gap-4 font-Nunito bg-gray-100 rounded-lg w-full h-full box-border p-2"
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

export const CheckIfVideo = ({ objectToCheck }) => {
  if (objectToCheck.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    console.log("image");
    return (
      <img
        src={objectToCheck}
        className=" object-cover mx-auto h-full w-full rounded-b-3xl"
      />
    );
  } else {
    console.log("video");
    return (
      <video
        className=" mx-auto h-full w-full rounded-b-3xl"
        controls
        autoPlay
        muted
      >
        <source src={objectToCheck} type="video/mp4" />
      </video>
    );
  }
};
