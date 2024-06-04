import React from "react";
import placeholderImage from "../assets/heroimage.png";
import boiler from "../assets/boiler.png";
import { Icon } from "../ultilities/ultFunctions";

export const AboutUsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <section className="container mx-auto flex flex-row lg:flex-column gap-4 ">
        <div className="max-w-3xl">
          <img src={placeholderImage} alt="" className="rounded-t-2xl" />
        </div>

        <article className="max-w-3xl flex flex-col gap-4 justify-center">
          <h2 className="font-Exo text-xl text-blue-500">About Us</h2>
          <h1 className="font-Exo text-4xl text-blue-800">
            Nobody Woo's Clients <br /> Like We Do
          </h1>
          <p className="font-Nunito text-lg text-slate-900">
            {`Our team proudly offers an on-time guarantee and a 100% customer
          satisfaction guarantee. It's why we make sure that our licensed
          plumbers are highly trained and fully equipped to meet your home's
          diverse plumbing service needs.`}
          </p>

          <div className="font-Nunito text-base text-slate-">
            <p>
              <span />
              First Class Quality Service at Affordable Prices
            </p>
            <p>
              <span />
              Immediate 24/ 7 Emergency Service
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-8">
            <Icon icon={boiler} text={"2000+"} subtext={"Boiler Installed"} />
            <Icon icon={boiler} text={"2000+"} subtext={"Boiler Installed"} />
          </div>
        </article>
      </section>
    </div>
  );
};
