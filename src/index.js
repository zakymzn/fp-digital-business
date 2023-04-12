import { React } from "react";
import { createRoot } from "react-dom/client";
import SmartCryptApp from "./components/SmartCryptApp";

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<SmartCryptApp />);