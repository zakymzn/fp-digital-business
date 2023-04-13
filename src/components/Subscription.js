import React from "react";

function Subscription() {
    return (
        <section className="px-10">
            <div className="bg-primary-purple bg-opacity-60 p-4 rounded-xl flex justify-between items-center">
                <p className="text-white px-4">
                    If you're a hacker subscribed to our newsletter, you have a better chance of earning a bounty.
                </p>
                <div>
                    <input type="email" placeholder="Your Email Address" className="p-4 rounded-tl-xl rounded-bl-xl font-semibold text-primary-purple placeholder:text-primary-purple" />
                    <button className="p-4 rounded-tr-xl rounded-br-xl font-semibold bg-secondary-purple text-primary-purple">Subscribe</button>
                </div>
            </div>
        </section>
    );
}

export default Subscription;