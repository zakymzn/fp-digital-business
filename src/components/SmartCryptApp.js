import React from "react";
import NavBar from "./NavBar";
import Section1 from "./Section1";

class SmartCryptApp extends React.Component {
    render() {
        return (
            <div className="smart-crypt-app">
                <header className="inline">
                    <NavBar />
                </header>
                <main>
                    <Section1 />
                </main>
                <footer>

                </footer>
            </div>
        );
    }
}

export default SmartCryptApp;