import React from "react";

function NewsItem({ newsImage, altNewsImg, newsTitle, newsSnippet, newsAuthorImage, newsAuthorAltNewsImg, newsAuthorName, newsComments, newsViews }) {
    return (
        <div className="flex m-10 space-x-4">
            <img src={newsImage} alt={altNewsImg} className=" rounded-2xl w-32 h-32 object-cover" />
            <div className="w-10" />
            <div className="text-left space-y-4">
                <p className="font-semibold text-lg text-primary-purple line-clamp-1">{newsTitle}</p>
                <p className="text-primary-purple text-justify line-clamp-3">{newsSnippet}</p>
                <div className="flex items-center space-x-4">
                    <a href="#">
                        <div className="flex items-center">
                            <img src={newsAuthorImage} alt={newsAuthorAltNewsImg} className="w-6 rounded-full" />
                            <span className="m-2 text-primary-purple text-xs">{newsAuthorName}</span>
                        </div>
                    </a>
                    <a href="#">
                        <div className="flex items-center">
                            <img src={require('../assets/icons/iconamoon_comment-thin.png')} alt="comments" />
                            <span className="m-2 text-primary-purple text-xs">{newsComments} Comments</span>
                        </div>
                    </a>
                    <a href="#">
                        <div className="flex items-center">
                            <img src={require('../assets/icons/ph_eye-thin.png')} alt="views" />
                            <span className="m-2 text-primary-purple text-xs">{newsViews} Views</span>
                        </div>
                    </a>
                    <div className="flex items-center space-x-2">
                        <a href="#">
                            <img src={require('../assets/icons/ph_share-network-thin.png')} alt="share" />
                        </a>
                        <a href="#">
                            <img src={require('../assets/icons/facebook.png')} alt="facebook" className="w-6" />
                        </a>
                        <a href="#">
                            <img src={require('../assets/icons/instagram.png')} alt="instagram" className="w-6" />
                        </a>
                        <a href="#">
                            <img src={require('../assets/icons/whatsapp.png')} alt="whatsapp" className="w-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default NewsItem;