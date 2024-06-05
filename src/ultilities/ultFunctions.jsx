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
    <article className="rounded-3xl max-w-[500px] w-full box-border flex flex-col">
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
    </article>
  );
};

export const TitledTextSection = ({ sectionTitle, title, text, children }) => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-4 basis-[calc(100%/3 - 16px)] w-full items-center justify-center">
      <article className="max-w-3xl flex flex-col gap-4 justify-center">
        <h2 className="font-Exo text-xl text-blue-500">{sectionTitle}</h2>
        <h1 className="font-Exo text-4xl text-blue-800">{title}</h1>
        <p className="font-Nunito text-lg text-slate-900">{text}</p>
      </article>

      <div className="max-w-3xl basis-[calc(100%/3 - 16px)]">{children}</div>
    </section>
  );
};

export const Icon = ({ icon, text, subtext }) => {
  return (
    <div className="flex flex-row items-start gap-2 font-Nunito basis-1/3 px-4">
      <div className="max-w-[100px] max-h-[100px] bg-gray-100 rounded-full">
        <img src={icon} />
      </div>
      <div className="text-blue-600">
        <h1 className="text-2xl">{text}</h1>
        <h1 className="text-lg">{subtext}</h1>
      </div>
    </div>
  );
};

export const SquareIcon = ({ icon }) => (
  <div className="flex flex-col items-start gap-4 font-Nunito bg-gray-100 rounded-lg max-w-[200px] max-h-[200px] w-full h-full box-border p-2">
    <div className="max-w-[58px] max-h-[58px] bg-gray-200 rounded-full">
      <img src={icon} />
    </div>
    <div className="text-blue-600">
      <h1 className="text-xl">Experienced Team</h1>
      <h1 className="text-md">Our Employees have a great experience.</h1>
    </div>
  </div>
);
