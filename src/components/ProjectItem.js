import React from "react";

function ProjectItem({ logo, altimg, projectName, reward, target, link }) {
    return (
        <div className="grid grid-cols-5 bg-primary-purple bg-opacity-60 p-4 mb-12 rounded-xl justify-between items-center">
            <img src={logo} alt={altimg} className="w-14" />
            <div className="text-white">
                <p className="font-semibold">{projectName}</p>
                <p>Name</p>
            </div>
            <div className="text-white">
                <p className="font-semibold">{reward}</p>
                <p>Reward</p>
            </div>
            <div className="text-white">
                <p className="font-semibold">{target}</p>
                <p>Target</p>
            </div>
            <a href={link}>
                <div className="bg-white bg-opacity-60 py-3 rounded-xl">
                    <p className="font-bold text-primary-purple text-center">View Bounty</p>
                </div>
            </a>
        </div>
    );
}

export default ProjectItem;