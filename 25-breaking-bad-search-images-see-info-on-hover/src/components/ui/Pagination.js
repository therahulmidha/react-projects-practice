import React from "react";

export const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  decCurrentPage,
  incCurrentPage,
}) => {
  const setPage = (event) => {
    setCurrentPage(+event.target.innerText);
  };
  return (
    <div className="center mt-4">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <span className="page-link" onClick={decCurrentPage}>
              Previous
            </span>
          </li>

          {new Array(totalPages).fill(0).map((page, index) => (
            <li
              key={index}
              className={
                currentPage === index + 1 ? "page-item active" : "page-item"
              }
            >
              <span className="page-link" onClick={setPage}>
                {index + 1}
              </span>
            </li>
          ))}
          <li className="page-item">
            <span className="page-link" onClick={incCurrentPage}>
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
