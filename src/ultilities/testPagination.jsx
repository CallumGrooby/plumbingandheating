import React, { Children, useState } from "react";

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
          <article className="" key={index}>
            {renderItem(object)}
          </article>
        ))}
      </div>

      <div className="flex flex-row gap-4 justify-center py-8">
        {paginationButtons}
      </div>
    </section>
  );
};
