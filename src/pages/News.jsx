import React, { useState } from "react";
import BlogPosts from "../data/BlogPosts";
import { CheckIfVideo, Header } from "../ultilities/ultFunctions";
import { Link } from "react-router-dom";

export const News = () => {
  return (
    <section className="container mx-auto my-8">
      <Header title={"News"} text={"See What Happening at "} />

      <section className="container max-w-[1000px] mx-auto flex flex-col flex-wrap content-center gap-8 my-4">
        {BlogPosts.map((post, index) => {
          return <BlogArticle key={index} post={post} index={index} />;
        })}
      </section>
    </section>
  );
};

const BlogArticle = ({ post, index }) => {
  return (
    <Link to={`/blog/${index}`} className="flex flex-col md:flex-row gap-4 p-4">
      <div className="basis-[400px]">
        {/* <img src={post.img} className="w-full h-full" /> */}
        <CheckIfVideo objectToCheck={post.img} />
      </div>

      <div className="basis-1/2 flex flex-col gap-2">
        <div className="flex gap-2 text-sm font-Exo items-center">
          <h3>{post.date}</h3>
          <span className="w-3 h-3 bg-gray-700 rounded-full" />
          <h3>{post.readTime}</h3>
        </div>

        <h1 className="text-2xl font-Exo">{post.title}</h1>
        <p className="font-Nunito">{post.text[0]}</p>
      </div>
    </Link>
  );
};
