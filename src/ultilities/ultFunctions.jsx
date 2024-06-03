import React from "react";

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

export const ServiceArticle = ({ serviceInfo }) => {
  return (
    <article className="rounded-3xl max-w-[500px] w-full text-blue-700 box-border">
      <img src={serviceInfo.image} alt="" className="rounded-t-2xl" />
      <div className="flex flex-col gap-2  py-8 px-8 bg-gray-100 rounded-b-2xl">
        <h1 className="font-Exo text-3xl font-normal">{serviceInfo.title}</h1>
        <p className="font-Nunito text-lg">{serviceInfo.text}</p>
      </div>
    </article>
  );
};
