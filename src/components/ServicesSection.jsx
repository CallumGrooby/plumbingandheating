import { Header, ServiceArticle } from "../ultilities/ultFunctions";
import { useEffect, useRef } from "react";
import {
  useInView,
  stagger,
  useAnimate,
  motion,
  useAnimation,
} from "framer-motion";

export const ServicesSection = ({ services }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="container mx-auto my-8">
      <Header title={"What Can We Help You With?"} text={""} />

      {/* flex flex-col lg:flex-row lg:flex-nowrap flex-wrap container gap-4 mx-auto content-center justify-between */}
      <div className="flex items-center justify-center my-8">
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          ref={ref}
        >
          {services.map((serviceInfo, index) => {
            return (
              <ServiceArticle
                key={index}
                serviceInfo={serviceInfo}
                isInView={isInView}
                index={index}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};
