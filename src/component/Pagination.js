import React from "react";

export const Pagination = ({ totalPage, dataPerPage , paginate }) => {
  let pageNumber = [];
  for (let i = 1; i < Math.ceil(totalPage / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <>
            <li className="page-item" key={number}>
              <a href="!#" onClick={()=>paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
