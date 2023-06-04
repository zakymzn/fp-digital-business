import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import ReactPaginate from "react-paginate";

function NewsItem({ newsImage, altNewsImg, newsTitle, newsSnippet, newsAuthorImage, newsAuthorAltNewsImg, newsAuthorName, newsComments, newsViews }) {
    return (
        <div className="flex m-10">
            <img src={newsImage} alt={altNewsImg} className=" rounded-2xl w-40 h-40 object-cover" />
            <div className="w-10" />
            <div className="text-left space-y-4">
                <p className="font-semibold text-lg text-primary-purple">{newsTitle}</p>
                <p className="text-primary-purple">{newsSnippet}</p>
                <div className="flex space-x-4">
                    <a href="#">
                        <div className="flex items-center">
                            <img src={newsAuthorImage} alt={newsAuthorAltNewsImg} className="w-6" />
                            <span className="m-2 text-primary-purple text-xs">{newsAuthorName}</span>
                        </div>
                    </a>
                    <a href="#">
                        <div className="flex items-center">
                            <img src={require('../assets/icons/iconamoon_comment-thin.png')} />
                            <span className="m-2 text-primary-purple text-xs">{newsComments} Comments</span>
                        </div>
                    </a>
                    <a href="#">
                        <div className="flex items-center">
                            <img src={require('../assets/icons/ph_eye-thin.png')} />
                            <span className="m-2 text-primary-purple text-xs">{newsViews} Views</span>
                        </div>
                    </a>
                    <div className="flex items-center space-x-2">
                        <a href="#">
                            <img src={require('../assets/icons/ph_share-network-thin.png')} />
                        </a>
                        <a href="#">
                            <img src={require('../assets/icons/facebook.png')} className="w-6" />
                        </a>
                        <a href="#">
                            <img src={require('../assets/icons/instagram.png')} className="w-6" />
                        </a>
                        <a href="#">
                            <img src={require('../assets/icons/whatsapp.png')} className="w-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default NewsItem;