import ReactPaginate from 'react-paginate';
import React, { useState } from 'react'


const Pagination = ({ pageCount,getCurrentPage,totalPages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    getCurrentPage(selectedPage.selected+1);
  };
  
  return (
    <div>      
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagination;