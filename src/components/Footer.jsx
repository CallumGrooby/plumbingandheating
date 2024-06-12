import React from "react";
import { Logo } from "../ultilities/ultFunctions";
import { Link, NavLink } from "react-router-dom";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  const linkSections = [
    {
      header: "Services",
      links: [
        { header: "Gas Services", url: "" },
        { header: "Oil Heating", url: "" },
        { header: "Stoves", url: "" },
        { header: "Bath Rooms", url: "" },
        { header: "Show Room", url: "" },
      ],
    },
    {
      header: "Company",
      links: [
        { header: "FAQs", url: "" },
        { header: "Core Values", url: "" },
        { header: "Contact Us", url: "" },
        { header: "News", url: "" },
      ],
    },
  ];

  return (
    <footer className="bg-blue-950">
      <section className="container mx-auto py-8 flex gap-8 flex-col lg:flex-row flex-nowrap content-start justify-center">
        <div className="flex justify-center flex-wrap content-start basis-1/3">
          <Logo />
        </div>

        <section className="flex justify-center flex-wrap content-start text-white flex-row gap-8 flex-grow">
          {linkSections.map((section, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <h1 className="font-Exo mb-4 text-xl">{section.header}</h1>
                {section.links.map((link, index) => (
                  <NavLink
                    className="font-Nunito text-lg"
                    to={link.url}
                    key={index}
                  >
                    {link.header}
                  </NavLink>
                ))}
              </div>
            );
          })}

          <Address />
          <SocialSection />
        </section>
      </section>
    </footer>
  );
};

const SocialSection = () => {
  const SocialLinks = [
    {
      name: "",
      icon: faFacebook,
      url: "facebook.com",
    },
    {
      name: "",
      icon: faTwitter,
      url: "facebook.com",
    },
    {
      name: "",
      icon: faLinkedin,
      url: "facebook.com",
    },
  ];

  return (
    <section className="text-white">
      <h1 className="text-xl font-Exo mb-4">Social Media</h1>

      <div className="flex flex-row gap-4">
        {SocialLinks.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.url}
              className="hover:text-orange-500 text-xl"
            >
              <FontAwesomeIcon icon={link.icon} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const Address = () => {
  const addressLines = ["Main Road", "Wrangle", "Boston", "PE229AS"];
  return (
    <section className="text-white font-Exo">
      <h1 className="text-xl font-Exo mb-4">Address</h1>
      <div className="flex flex-col gap-0">
        {addressLines.map((line, index) => (
          <div key={index}>
            <h1>{line}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};
