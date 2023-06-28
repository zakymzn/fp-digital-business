import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import ReactPaginate from "react-paginate";
import NewsItem from "./NewsItem";

const newsItems = [
    <NewsItem
        newsImage={require('../assets/news/news1.jpg')}
        altNewsImg={'news1'}
        newsTitle={'Bahaya! makanan ini ternyata memiliki kalori tertinggi'}
        newsSnippet={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news2.jpg')}
        altNewsImg={'news2'}
        newsTitle={'Kandungan gula pada makanan ini sangat berbahaya'}
        newsSnippet={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news3.jpg')}
        altNewsImg={'news1'}
        newsTitle={'Terlalu banyak memakan eskrim beresiko diabetes!'}
        newsSnippet={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news4.png')}
        altNewsImg={'news1'}
        newsTitle={'Bahaya! makanan ini ternyata memiliki kalori tertinggi'}
        newsSnippet={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news5.jpg')}
        altNewsImg={'news1'}
        newsTitle={'Bahaya! makanan ini ternyata memiliki kalori tertinggi'}
        newsSnippet={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news6.jpg')}
        altNewsImg={'news1'}
        newsTitle={'Bahaya! makanan ini ternyata memiliki kalori tertinggi'}
        newsSnippet={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news1.jpg')}
        altNewsImg={'news1'}
        newsTitle={'Bahaya! makanan ini ternyata memiliki kalori tertinggi'}
        newsSnippet={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news1.jpg')}
        altNewsImg={'news1'}
        newsTitle={'Bahaya! makanan ini ternyata memiliki kalori tertinggi'}
        newsSnippet={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news1.jpg')}
        altNewsImg={'news1'}
        newsTitle={'Bahaya! makanan ini ternyata memiliki kalori tertinggi'}
        newsSnippet={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />
];

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