import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import ReactPaginate from "react-paginate";
import newsItems from "../data/NewsList";

function Items({ currentItems }) {
    return (
        <div className="grid grid-cols-2">
            {currentItems && currentItems.map((item) => (
                <div>{item}</div>
            ))}
        </div>
    );
}

function NewsPaginate({ newsItemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + newsItemsPerPage;
    const currentItems = newsItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(newsItems.length / newsItemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * newsItemsPerPage) % newsItems.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                nextClassName="hover:font-semibold"
                onPageChange={handlePageClick}
                activeClassName="border border-primary-purple px-4 py-2 rounded-lg"
                pageRangeDisplayed={5}
                pageCount={pageCount}
                pageClassName="hover:font-semibold"
                previousLabel="Previous"
                previousClassName="hover:font-semibold"
                renderOnZeroPageCount={null}
                className="flex space-x-10 text-primary-purple items-center"
            />
        </>
    );
}

export default NewsPaginate;