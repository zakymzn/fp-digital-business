import React from "react";
import NavBar from "./NavBar";
import Headline from "./Headline";
import Subscription from "./Subscription";
import ProjectItem from "./ProjectItem";
import ForHackers from "./ForHackers";
import ForProjects from "./ForProjects";
import Footer from "./Footer";

class SmartCryptApp extends React.Component {
    render() {
        return (
            <div id="home" className="smart-crypt-app bg-gradient-to-b from-white to-secondary-purple">
                <header className="inline">
                    <NavBar />
                </header>
                <main>
                    <Headline />
                    <Subscription />
                    <div className="h-20"></div>
                    <section className="px-10">
                        <ProjectItem
                            logo={require('../assets/projects/cosmos-atom-logo 1.png')}
                            altimg={"atom-logo"}
                            projectName={"Cosmos (ATOM)"}
                            reward={"$100,000 USD"}
                            target={"Smart Contract"}
                            link={"#"} />
                        <ProjectItem
                            logo={require('../assets/projects/CAKE-logo 1.png')}
                            altimg={"pancakeswap-logo"}
                            projectName={"PancakeSwap"}
                            reward={"$50,000 USD"}
                            target={"DeFi & DEX"}
                            link={"#"} />
                        <ProjectItem
                            logo={require('../assets/projects/zk_sync1662551576695 1.png')}
                            altimg={"zksync-logo"}
                            projectName={"zkSync"}
                            reward={"$500,000 USD"}
                            target={"Smart Contract"}
                            link={"#"} />
                        <ProjectItem
                            logo={require('../assets/projects/optimism-ethereum-op-logo 1.png')}
                            altimg={"optimism-logo"}
                            projectName={"Optimism"}
                            reward={"$350,000 USD"}
                            target={"Smart Contract"}
                            link={"#"} />
                        <ProjectItem
                            logo={require('../assets/projects/apollox-logo 1.png')}
                            altimg={"apollox-logo"}
                            projectName={"ApolloX"}
                            reward={"$20,000 USD"}
                            target={"DeFi & DEX"}
                            link={"#"} />
                    </section>
                    <section className="flex justify-center">
                        <a href="#">
                            <div className="bg-primary-purple bg-opacity-60 px-16 py-3 rounded-xl">
                                <p className="text-white font-semibold">View All Bounties</p>
                            </div>
                        </a>
                    </section>
                    <div className="h-28"></div>
                    <section>
                        <ForHackers />
                        <div className="my-16" />
                        <ForProjects />
                    </section>
                    <div className="h-20" />
                </main>
                <footer className="px-10">
                    <Footer />
                    <div className="h-10" />
                </footer>
            </div>
        );
    }
}

export default SmartCryptApp;