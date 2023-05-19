// 1. Import React and ReactDOM libraries

import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./App";


// 2. Get control of your root div element
var rootDiv = document.getElementById('root');

var root = ReactDOM.createRoot(rootDiv);

root.render(<App/>);
