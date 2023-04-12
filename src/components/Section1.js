import React from "react";

function Section1() {
    return (
        <section>
            <div id="headline-and-body-copy" className="text-center w-1/2 m-auto my-8">
                <p className="text-5xl font-semibold text-primary-purple">
                    Discover bugs in Web3 projects to earn <span className="font-bold">cryptocurrency</span>
                </p>
                <p className="text-primary-purple my-8">
                    Now is the time to begin your career as a Web3 bug hunter and earn cryptocurrency for each bug you discover
                </p>
                <div className="">
                    <button className="bg-primary-purple text-white font-medium m-2 p-2 px-4 rounded-2xl">Explore Bounties</button>
                    <button className="border-2 border-primary-purple text-primary-purple font-medium m-2 p-2 px-4 rounded-2xl">Get Protected</button>
                </div>
            </div>
        </section>
    );
}

export default Section1;