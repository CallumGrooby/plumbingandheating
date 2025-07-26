import React, { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

export const ObjectPagination = ({
  objects,
  renderItem,
  objectsPerPage = 3,
  containerCSS,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(objects.length / objectsPerPage);
  const indexOfLastObject = Math.min(currentPage + 1) * objectsPerPage;
  const indexOfFirstObject = indexOfLastObject - objectsPerPage;
  const currentObjects = objects.slice(indexOfFirstObject, indexOfLastObject);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginationButtons = Array.from({ length: totalPages }, (_, index) => (
    <div
      className="bg-gray-400 w-7 h-7 flex justify-center items-center"
      key={index}
      onClick={() => handlePageChange(index)}
    >
      {currentPage == index ? (
        <span className="block w-5 h-5 bg-blue-800" />
      ) : null}
    </div>
  ));

  return (
    <section className="w-full">
      <div className={containerCSS}>
        {currentObjects.map((object, index) => (
          <motion.article
            ref={ref}
            className=""
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4 * index, duration: 0.5 },
                  }
                : { opacity: 0, y: 20 }
            }
          >
            {renderItem(object)}
          </motion.article>
        ))}
      </div>

      <div className="flex flex-row gap-4 justify-center py-8">
        {paginationButtons}
      </div>
    </section>
  );
};
