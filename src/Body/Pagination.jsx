import React from "react";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

function PaginationPage({total, onChangePage, currentPage}) {
    return (
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={total}
          changeCurrentPage={onChangePage}
          theme="bottom-border"
        />
      </div>
    );
}
export default PaginationPage;