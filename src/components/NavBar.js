import React from "react";

function NavBar() {
    return (
        <nav className="sticky flex justify-between items-center p-4">
            <img src={require('../assets/logo.png')} className="w-24" alt="logo" />
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