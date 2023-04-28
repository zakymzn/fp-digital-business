import React from "react";

function NavBar() {
    return (
        <nav className="sticky flex justify-between items-center p-4">
            <a href="#">
                <div className="flex items-center space-x-2">
                    <img src={require('../assets/logo.png')} className="w-14" alt="logo" />
                    <p className="text-primary-purple text-xl">Smart<span className="font-bold">Crypt</span></p>
                </div>
            </a>
            <ul className="flex">
                <li className="text-primary-purple font-medium m-2 p-2 hover:font-bold">
                    <a href="#">News</a>
                </li>
                <li className="text-primary-purple font-medium m-2 p-2 hover:font-bold">
                    <a href="#">Learn</a>
                </li>
                <li className="text-primary-purple font-medium m-2 p-2 hover:font-bold">
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">
                        <div className="bg-primary-purple text-white font-medium m-2 p-2 px-4 rounded-2xl">
                            Explore Bounties
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;