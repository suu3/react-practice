import React from 'react';
import Pagination from "react-js-pagination";

const PageNumber = (props) => {
    return(
    <Pagination
        activePage={props.page}
        itemsCountPerPage={5}
        totalItemsCount={props.postList.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={props.handlePageChange}
    />
    );
};

export default PageNumber;