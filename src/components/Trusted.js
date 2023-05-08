import React from "react";

function Trusted() {
    return (
        <section className="flex px-10 items-center justify-between">
            <p className="text-primary-purple font-semibold">Trusted by :</p>
            <div className="" />
            <img src={require('../assets/trusted/gemini.png')} alt="gemini" className="h-20" />
            <img src={require('../assets/trusted/meta.png')} alt="meta" className="h-6" />
            <img src={require('../assets/trusted/the-sandbox.png')} alt="sandbox" className="h-10" />
            <img src={require('../assets/trusted/solana.png')} alt="solana" className="h-10" />
            <img src={require('../assets/trusted/arbitrum.png')} alt="arbitrum" className="h-10" />
        </section>
    );
}

export default Trusted;