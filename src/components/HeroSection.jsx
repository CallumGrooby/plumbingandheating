import React from "react";
import { Button } from "../ultilities/ultFunctions";
import placeHolderImage from "../assets/heroimage.png";

export const HeroSection = ({
  title,
  text,
  hasButtons,
  centered,
  gradient = "bg-gradient-to-r from-black to-gray-600 opacity-50",
  image = placeHolderImage,
}) => {
  return (
    <section className="relative w-full max-h-[600px]">
      <div className="relative w-full h-full min-h-[400px] max-h-[600px]">
        {/* Image */}
        <img
          src={image}
          alt="background"
          className="w-full h-full object-cover min-h-[400px] max-h-[600px] rounded-b-[200px] "
        />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 rounded-b-[200px] ${gradient}`}></div>

        <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div
            className={`container h-full mx-auto flex flex-col justify-center text-white gap-4 text-center ${
              centered ? "" : "lg:text-start"
            }`}
          >
            <h1 className="font-Exo text-4xl ">{title}</h1>
            <p className="font-Nunito text-2xl font-light">{text}</p>
            {hasButtons && (
              <div
                className={`flex flex-col lg:flex-row gap-4 justify-center items-center	${
                  centered ? "" : "lg:justify-start"
                }`}
              >
                <Button
                  isBlue={true}
                  link={"/contact-us"}
                  text={"Contact Us"}
                />
                <Button
                  isBlue={false}
                  link={"/showroom"}
                  text={"Vist Our Show Room"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
