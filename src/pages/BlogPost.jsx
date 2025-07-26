import React from "react";
import { useParams } from "react-router-dom";
import BlogPosts from "../data/BlogPosts";
import { CheckIfVideo, Header } from "../ultilities/ultFunctions";

export const BlogPost = () => {
  const { id } = useParams();
  const post = BlogPosts[id];
  console.log(post);

  return (
    <>
      <section className="container mx-auto flex flex-col px-4 my-8">
        <div className="flex gap-2 text-sm font-Exo items-center">
          <h3>{post.date}</h3>
          <span className="w-3 h-3 bg-gray-700 rounded-full" />
          <h3>{post.readTime}</h3>
        </div>

        <Header title={post.title} text={""} />
        <div className="basis-[400px] max-h-[600px]">
          <CheckIfVideo objectToCheck={post.img} />
        </div>

        <div className="text-xl font-Nunito">
          {post.text.map((text, index) => (
            <p key={index} className="mt-4">
              {text}
              <br></br>
            </p>
          ))}
        </div>
      </section>

      <Comments comments={post.comments} />
    </>
  );
};

const Comments = ({ comments }) => (
  <section className="container mx-auto my-4 px-4">
    <h1 className="font-Exo text-2xl text-blue-800 underline">Comments</h1>
    <div className="">
      {comments.map((comment, index) => {
        return (
          <div key={index} className="my-2">
            <h3 className="font-Exo text-lg text-blue-800">{comment.user}</h3>
            <p className="font-Exo text-md text-blue-500">{comment.comment}</p>
          </div>
        );
      })}
    </div>

    <form className="gap-4 flex flex-col w-full rounded-xl">
      <h1 className="font-medium mt-3 font-Exo text-blue-800">
        Add Your Comment
      </h1>
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
        Send
      </button>
    </form>
  </section>
);
