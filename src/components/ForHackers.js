import React from "react";

function ForHackers() {
    return (
        <div className="flex">
            <img src={require('../assets/anonymous-hacker-purple-background_16_9.jpg')} alt="for-hackers" className="rounded-e-3xl w-1/3" />
            <div className="px-16 self-center space-y-10">
                <p className="text-primary-purple font-semibold text-3xl">For Hackers</p>
                <p className="text-primary-purple text-justify">Join SMARTCRYPT as a hacker to utilize your hacking skills in protecting DeFi users from theft and attacks. Earn fair compensation and rewards for your contributions in safeguarding the security of DeFi.</p>
                <div className="mt-10" />
                <a href="#">
                    <div className="rounded-xl border-primary-purple text-primary-purple border-2 hover:bg-primary-purple hover:text-white py-4 text-center transition">
                        <p className="text-xl font-semibold">Sign Up</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ForHackers;