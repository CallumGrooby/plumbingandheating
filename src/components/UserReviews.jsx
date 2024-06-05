import React, { useEffect, useState } from "react";
import ReviewData from "/Reviews.json?url";
import axios from "axios";
import { ObjectPagination } from "../ultilities/testPagination";

export const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      comment:
        "Impressive service at a competitive price. The entire team made sure I stayed informed and up to date during my boiler replacement after a flood. The work was exceptionally tidy, and the boiler worked flawlessly. All completed promptly and within budget.",
      date: "2024-06-01",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 3,
      comment:
        "Highly professional service at a reasonable price. I was kept well-informed throughout the process of replacing my boiler following a flood. The work was executed neatly, and the boiler functioned perfectly. Completed on schedule and within budget.",
      date: "2024-05-28",
    },
    {
      id: 3,
      user: "Alex Johnson",
      rating: 4,
      comment:
        "Outstanding service at a competitive rate. Throughout the boiler replacement process after a flood, I was kept informed and updated by the entire team. The work was impeccably clean, and the boiler functioned flawlessly. Completed on time and within budget.",
      date: "2024-05-25",
    },
    {
      id: 4,
      user: "Emily Brown",
      rating: 3,
      comment:
        "Exceptional service at an affordable price. The team ensured I was well-informed and up to date throughout the process of replacing my boiler after a flood. The work was done neatly, and the boiler operated perfectly. Finished on schedule and within budget.",
      date: "2024-05-20",
    },
    {
      id: 5,
      user: "Michael Wilson",
      rating: 5,
      comment:
        "Superb service at a competitive cost. I was kept well-informed and up to date by the entire team throughout the process of replacing my boiler following a flood. The work was extremely neat, and the boiler functioned flawlessly. Completed on time and within budget.",
      date: "2024-05-15",
    },
  ];

  return (
    <section className="container mx-auto my-16 px-4">
      <header className="text-center">
        <h1 className="font-Exo text-3xl text-blue-800">
          What Our Valued Customers Think
        </h1>
        <p className="text-xl text-blue-500">
          Take a look at some of the reviews from our valued customers.
        </p>
      </header>

      <ObjectPagination
        objects={reviews}
        containerCSS={
          "flex lg:flex-row flex-col gap-4 justify-center items-center"
        }
        renderItem={(object) => (
          <div
            className="flex flex-col justify-end gap-2 w-full max-w-[500px] min-h-[260px] h-full 
            p-4 py-8 box-border rounded-3xl shadow-md"
          >
            <p className="font-Nunito text-base">{object.comment}</p>

            <div className="flex flex-row align-middle gap-2 font-Exo text-lg">
              <h2 className="text-blue-800">{object.user}</h2>
              <span className="text-blue-500 text-base">{object.date}</span>
            </div>

            <div className="flex flex-row gap-0 text-lg">
              {Array(object.rating)
                .fill(0)
                .map((x, idx) => (
                  <div key={idx} className="text-orange-500">
                    ★
                  </div>
                ))}
            </div>
          </div>
        )}
      />
    </section>
  );
};
