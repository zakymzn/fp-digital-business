import React from "react";

function Footer() {
    return (
        <section className="flex justify-between">
            <div className="space-y-7">
                <p className="text-primary-purple font-bold text-3xl">About</p>
                <div className="flex space-x-20 text-primary-purple">
                    <div>
                        <a href="#"><p>About us</p></a>
                        <div className="h-2" />
                        <a href="#"><p>Advertise with us</p></a>
                        <div className="h-2" />
                        <a href="#"><p>Writer for us</p></a>
                        <div className="h-2" />
                        <a href="#"><p>Contact us</p></a>
                    </div>
                    <div>
                        <a href="#"><p>Explore</p></a>
                        <div className="h-2" />
                        <a href="#"><p>Projects</p></a>
                        <div className="h-2" />
                        <a href="#"><p>Rules</p></a>
                    </div>
                </div>
                <div className="flex space-x-5">
                    <a href="#">
                        <img src={require('../assets/Twitter - Negative.png')} alt="twitter" />
                    </a>
                    <a href="#">
                        <img src={require('../assets/Github - Negative.png')} alt="github" />
                    </a>
                    <a href="#">
                        <img src={require('../assets/LinkedIn - Negative.png')} alt="linkedin" />
                    </a>
                    <a href="#">
                        <img src={require('../assets/Discord - Negative.png')} alt="discord" />
                    </a>
                    <a href="#">
                        <img src={require('../assets/Telegram - Negative.png')} alt="telegram" />
                    </a>
                </div>
            </div>
            <div>
                <a href="#home">
                    <img src={require('../assets/logo.png')} alt="logo" className="opacity-30 w-64" />
                </a>
            </div>
        </section>
    );
}

export default Footer;