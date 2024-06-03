import React from "react";
import { Button } from "../ultilities/ultFunctions";
import placeHolderImage from "../assets/heroimage.png";

export const HeroSection = ({ title, text }) => {
  return (
    <section className="relative w-screen max-h-[600px]">
      <div className="relative w-full h-full max-h-[600px]">
        {/* Image */}
        <img
          src={placeHolderImage}
          alt="background"
          className="w-full h-full object-cover max-h-[600px] rounded-b-[200px] "
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-600 opacity-50   rounded-b-[200px]"></div>

        <div className="absolute top-0 left-0 m-auto w-full h-full">
          <div className="container h-full mx-auto flex flex-col justify-center text-white gap-4 text-center lg:text-start">
            <h1 className="font-Exo text-4xl ">{title}</h1>
            <p className="font-Nunito text-2xl font-light">{text}</p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start items-center	">
              <Button isBlue={true} />
              <Button isBlue={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
