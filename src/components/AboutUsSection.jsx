import React, { useRef } from "react";
import placeholderImage from "../assets/heroimage.png";
import boiler from "../assets/boiler.png";
import leak from "../assets/icons/leak.png";
import bathroom from "../assets/icons/bathroom.png";

import { Icon, TitledTextSection } from "../ultilities/ultFunctions";
import { inView, motion, useInView } from "framer-motion";

export const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-gray-100 py-16">
      <section
        className={`transition-all duration-300 w-full max-w-[1300px] mx-auto `}
      >
        <TitledTextSection
          text={`Our team proudly offers an on-time guarantee and a 100% customer satisfaction guarantee.
          It's why we make sure that our licensed plumbers are highly trained and fully equipped to meet your home's diverse plumbing service needs.`}
          title={"Nobody Woo's Clients Like We Do"}
          sectionTitle={"About Us"}
        >
          <img src={placeholderImage} alt="" className="rounded-t-2xl" />
        </TitledTextSection>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
          ref={ref}
        >
          <Icon
            icon={leak}
            text={"10000+"}
            subtext={"Leaks Fixed"}
            index={0}
            isInView={isInView}
          />
          <Icon
            icon={boiler}
            text={"2000+"}
            subtext={"Boiler Installed"}
            index={1}
            isInView={isInView}
          />

          <Icon
            icon={bathroom}
            text={"100+"}
            subtext={"Bathrooms Installed"}
            index={1}
            isInView={isInView}
          />
        </motion.div>
      </section>
    </div>
  );
};
