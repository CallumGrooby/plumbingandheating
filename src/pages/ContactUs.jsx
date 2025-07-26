import React, { useRef, useState } from "react";
import { Header, TitledTextSection } from "../ultilities/ultFunctions";
import { HeroSection } from "../components/HeroSection.jsx";

import Services from "../data/Services.js";
import { MapSection } from "../ultilities/Map.jsx";
import boiler from "../assets/boiler.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faEnvelope,
  faLocationDot,
  faMailReply,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export const ContactUs = () => {
  return (
    <section>
      <HeroSection
        centered={true}
        hasButtons={false}
        text={
          "We're here to help with all your heating and plumbing needs. Reach out to us for prompt and professional service."
        }
        title={"Get in Touch with Us"}
      />

      <TitledTextSection
        title={"We're Here to Help"}
        sectionTitle={"Contact Us"}
        text={
          "Fill out the form on this page, and one of our friendly and knowledgeable team members will get back to you with the information you need. Whether you have a question about our services, need a quote, or require emergency assistance, we are committed to providing prompt and professional support. Your satisfaction is our priority, and we strive to deliver top-quality heating and plumbing solutions tailored to your specific needs. Reach out today and let us know how we can assist you!"
        }
      >
        <Form />
      </TitledTextSection>

      <section className="container mx-auto ">
        <MapSection />

        <section className="flex flex-col xl:flex-row gap-4 justify-center flex-wrap content-center mb-8">
          <Icon
            icon={faEnvelope}
            text={"endeavourplumbingandheating@gmail.com"}
          />
          <Icon icon={faPhone} text={"01205 616176"} />
          <Icon
            icon={faLocationDot}
            text={"Main Road, Wrangle, Boston PE229AS"}
          />
        </section>
      </section>
    </section>
  );
};

const Form = () => {
  const APIKey = import.meta.env.VITE_GET_FORM_API_KEY;
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  return (
    <form
      action={`https://getform.io/f/${APIKey}`}
      method="POST"
      className="container mx-auto gap-4 flex flex-col w-full bg-gray-100 rounded-xl p-2"
    >
      <span className="font-medium mt-3 font-Exo text-blue-800">Full Name</span>
      <input
        type="text"
        name="name"
        placeholder="Enter your full name"
        className="rounded-lg px-2 font-Exo text-blue-500
        border-orange-200 focus:border-orange-500 border-2 focus:outline-none
        "
      />
      <span className="font-medium mt-3 font-Exo text-blue-800">
        Email Address
      </span>
      <input
        type="text"
        name="email"
        placeholder="Enter your email address"
        className="rounded-lg px-2 font-Exo text-blue-500
        border-orange-200 focus:border-orange-500 border-2 focus:outline-none"
      />

      <span className="font-medium mt-3 font-Exo text-blue-800">
        Email Address
      </span>
      <select name="service" placeholder="Select a service">
        {Services.map((service, index) => (
          <option key={index} value={service}>
            {service}
          </option>
        ))}
      </select>

      <span className="font-medium mt-3 font-Exo text-blue-800">Message</span>
      <textarea
        name="message"
        placeholder="Enter your message"
        rows="4"
        className="rounded-lg px-2 font-Exo text-blue-500
        border-orange-200 focus:border-orange-500 border-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-lg font-Exo hover:bg-orange-600"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

const Icon = ({ icon, text }) => (
  <div className="flex flex-col gap-2 items-center basis-1/3 bg-gray-100 rounded-xl p-2 max-w-[400px]">
    <div className="bg-blue-500 rounded-full p-2 w-16 h-16 flex justify-center items-center ">
      <FontAwesomeIcon icon={icon} className="text-4xl text-orange-500" />
    </div>
    <p className="font-Exo text-lg text-blue-800">{text}</p>
  </div>
);
