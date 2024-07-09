import React, { useRef } from "react";
import { Header, TitledTextSection } from "../ultilities/ultFunctions";
import placeholderImage from "../assets/heroimage.png";
import { ObjectPagination } from "../ultilities/testPagination";
import { BlogArticle } from "../pages/News";
import BlogPosts from "../data/BlogPosts";
import { motion, useInView } from "framer-motion";

export const BlogSection = () => {
  return (
    <section className={`w-full container mx-auto px-4`}>
      {/* <Section
        sectionTitle={"Our Blog"}
        title={"Stay Informed with Our Plumbing and Heating Blog"}
        text={`Our blog is your go-to resource for the latest insights, tips, and updates in the plumbing and heating industry. We are committed to providing valuable information that helps you understand and maintain your systems more effectively. From expert advice to industry trends, our blog covers it all. Here’s what you can expect:`}
      ></Section> */}

      <Header
        title={"Stay Informed with Our Blog"}
        text={
          "We are committed to providing valuable information that helps you understand and maintain your systems more effectively. From expert advice to industry trends, our blog covers it all. Here’s what you can expect:"
        }
      />

      <ObjectPagination
        objects={BlogPosts}
        objectsPerPage={2}
        containerCSS={
          "flex lg:flex-row flex-col gap-4 justify-center items-center"
        }
        renderItem={(object) => <BlogArticle post={object} index={0} />}
      />
    </section>
  );
};
