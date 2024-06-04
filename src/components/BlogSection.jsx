import React from "react";
import { TitledTextSection } from "../ultilities/ultFunctions";
import placeholderImage from "../assets/heroimage.png";
import { ObjectPagination } from "../ultilities/testPagination";
export const BlogSection = () => {
  const reviews = [
    {
      title: "Efficient Heating Solutions for Winter",
      description:
        "Discover how our expert heating engineers can ensure your home stays warm and cozy during the chilly winter months. From boiler servicing to installation, we've got you covered.",
      date: "2024-06-01",
    },
    {
      title: "Transform Your Bathroom: From Concept to Completion",
      description:
        "Dive into the world of bathroom renovations with our team of skilled plumbers. Learn how we can turn your vision into a stunning reality, from initial design to flawless installation.",
      date: "2024-06-01",
    },
    {
      title: "Spring into Savings: Limited-Time Boiler Deals",
      description:
        "Don't miss out on our exclusive spring boiler sale! Get unbeatable prices on top-of-the-line boilers, including installation by our qualified engineers. Upgrade your heating system today and enjoy year-round comfort.",
      date: "2024-06-01",
    },
    {
      title: "Emergency Plumbing Services: When Every Minute Counts",
      description:
        "Be prepared for any plumbing crisis with our reliable emergency call-out services. Whether it's a burst pipe or a malfunctioning boiler, our team is ready to tackle any issue, day or night.",
      date: "2024-06-01",
    },
  ];

  return (
    <section className={`w-full container mx-auto px-4`}>
      <TitledTextSection
        sectionTitle={"Mission Statement"}
        title={"Nobody Woo's Clients Like We Do"}
        text={`Our mission is to deliver exceptional plumbing and heating services with a focus on customer satisfaction. 
            We strive to be Boston's leading provider, known for our reliability, professionalism, and dedication to quality.`}
      >
        {/* <img src={placeholderImage} alt="" className="rounded-t-2xl" /> */}

        <ObjectPagination
          objects={reviews}
          objectsPerPage={2}
          containerCSS={"flex flex-row gap-4 justify-center"}
          renderItem={(object) => (
            <article className="shadow-md flex flex-col max-w-80 min-w-40 w-full h-full rounded-2xl bg-slate-200">
              <img src={placeholderImage} alt="" className="rounded-t-2xl" />
              <div className="p-4">
                <h1 className="text-base lg:text-lg">{object.title}</h1>
                <p className="text-sm lg:text-lg">{object.description}</p>
              </div>
            </article>
          )}
        />
      </TitledTextSection>
    </section>
  );
};
