import React from "react";

function Headline() {
    return (
        <section>
            <div id="headline-and-body-copy" className="text-center w-1/2 m-auto my-8">
                <p className="text-5xl font-medium text-primary-purple">
                    Discover bugs in Web3 projects to earn <span className="font-semibold">cryptocurrency</span>
                </p>
                <p className="text-primary-purple my-8">
                    Now is the time to begin your career as a Web3 bug hunter and earn cryptocurrency for each bug you discover
                </p>
                <div>
                    <button className="border-2 border-primary-purple bg-primary-purple text-white font-medium m-2 p-2 px-4 rounded-2xl hover:bg-opacity-50 hover:border-opacity-50">Explore Bounties</button>
                    <button className="border-2 border-primary-purple text-primary-purple font-medium m-2 p-2 px-4 rounded-2xl hover:bg-primary-purple hover:text-white">Get Protected</button>
                </div>
            </div>
        </section>
    );
}

export default Headline;