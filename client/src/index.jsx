import React from "react";
import {createRoot} from "react-dom/client";

import App from './components/App.jsx';
import preloadImages from './preloadImages';

preloadImages();

const root = createRoot(document.getElementById("root"));

root.render(<App />);
