import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import PlaceholderImage from "../assets/placeholders.png";
import navImage1 from "../assets/navimage1.jpg";
import navImage2 from "../assets/navimage2.jpg";
import navImage3 from "../assets/navimage3.jpg";
import { Logo } from "../ultilities/ultFunctions";

export const Navigationbar = () => {
  const links = [
    { navbarLink: "Home", to: "/", submenu: null },
    {
      navbarLink: "About",
      to: "",
      submenu: [
        { title: "Core Values", url: "values" },
        { title: "FAQs", url: "faqs" },
      ],
      img: navImage1,
    },
    {
      navbarLink: "Services",
      to: "",
      submenu: [
        { title: "Gas Engineer", url: "gas-services" },
        { title: "Oil Heating", url: "heating-services" },
        { title: "Log Burners & Stoves", url: "log-burners-services" },
        { title: "Bathroom Installations", url: "bathroom-installations" },
      ],
      img: navImage3,
    },
    { navbarLink: "Show Room", to: "showroom", submenu: null },
    { navbarLink: "Contact Us", to: "contact-us", submenu: null },
    { navbarLink: "News", to: "news", submenu: null },
  ];

  return (
    <>
      <nav className="bg-blue-950 text-xl text-white py-8 lg:py-0 px-2 font-Exo sticky top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center ">
          <Logo />

          <div className=" lg:flex hidden flex-row gap-8 items-center">
            {links.map((linkData, index) => (
              <NavItem key={index} linkData={linkData} />
            ))}

            <ContactInfo />
          </div>

          <MobileNav links={links} />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

const NavItem = ({ linkData }) => {
  if (linkData.submenu) {
    return <NavDropDown info={linkData} />;
  } else {
    return (
      <Link to={linkData.to} className="hover:text-orange-600 cursor-pointer">
        {linkData.navbarLink}
      </Link>
    );
  }
};

const NavDropDown = ({ info }) => (
  <div className="group">
    <button className="dropbtn h-full py-8 hover:text-orange-600">
      {info.navbarLink}
    </button>
    {/* hidden group-hover: */}
    <div className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:flex min-h-[260px]">
      <div className="bg-blue-900 text-white w-full p-8 rounded-bl-3xl min-w-[260px] max-w-[380px]">
        <h2 className="text-xl mb-4">{info.navbarLink}</h2>
        <div className="flex flex-col gap-2">
          {info.submenu.map((subMenuItem, index) => (
            <Link
              key={index}
              to={subMenuItem.url}
              className="hover:text-orange-600 cursor-pointer"
            >
              {subMenuItem.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="min-w-[400px]">
        <img
          src={info.img}
          alt="About Us"
          className="object-cover w-full h-full rounded-br-full max-w-[460px]"
        />
      </div>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg">
    <span>01908 749 703</span>
    <span className="ml-2">&#9742;</span> {/* Phone icon */}
  </div>
);

const MobileNav = ({ links }) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button onClick={() => setNavbarOpen(!isNavbarOpen)}>=</button>
      <div
        className={`${
          isNavbarOpen ? "left-0" : "left-[-100vw]"
        } absolute bg-blue-950 w-full h-full top-0 transition-all ease-in-out`}
      >
        <header className="w-full relative p-10  bg-blue-950">
          <Logo />
          <button
            className="absolute right-0 top-0 p-10 hover:text-orange-600"
            onClick={() => setNavbarOpen(!isNavbarOpen)}
          >
            X
          </button>
        </header>

        <div className="flex flex-col px-10 gap-4 pb-6 bg-blue-950 ">
          {links.map((linkData, index) => (
            <MobileNavItem key={index} linkData={linkData} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileNavItem = ({ linkData }) => {
  if (linkData.submenu) {
    return <DropDownItems linkData={linkData} />;
  } else {
    return (
      <Link to={linkData.to} className="hover:text-orange-600 cursor-pointer">
        {linkData.navbarLink}
      </Link>
    );
  }
};

const DropDownItems = ({ linkData }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <div onClick={() => setShowDropDown(!showDropDown)}>
        <h1 className="hover:text-orange-600 cursor-pointer">
          {linkData.navbarLink}
        </h1>
        <div
          className={`flex flex-col gap-2 
          transition-all ease-in-out duration-500
        ${showDropDown ? "max-h-[400px]" : "max-h-0"}
          overflow-hidden
        `}
        >
          {linkData.submenu.map((subMenuItem, index) => (
            <Link
              to={subMenuItem.url}
              className="hover:text-orange-600 mb-2 ml-8"
              key={index}
            >
              {subMenuItem.title}
            </Link>
          ))}
        </div>{" "}
      </div>
    </>
  );
};
