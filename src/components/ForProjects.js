import React from "react";

function ForProjects() {
    return (
        <div className="flex">
            <div className="px-16 self-center space-y-10">
                <p className="text-primary-purple font-semibold text-3xl text-end">For Projects</p>
                <p className="text-primary-purple text-justify">Safeguard your DeFi project with SMARTCRYPT top-notch security services. Benefit from thorough security audits, risk assessments, and expert consultations to protect your project's reputation and sustainability.</p>
                <div className="mt-10" />
                <a href="#">
                    <div className="rounded-xl border-primary-purple border-2 py-4 text-center">
                        <p className="text-primary-purple text-xl font-semibold">Learn How</p>
                    </div>
                </a>
            </div>
            <img src={require('../assets/shutterstock_794253436_PURPLE_4__iurd93.jpg')} alt="for-projects" className="rounded-s-3xl w-1/3" />
        </div>
    );
}

export default ForProjects;