// 1. Import React and ReactDOM libraries

import './index.css';
import React from "react";
import  ReactDOM from "react-dom/client";
//import App from "./App";
import {App2} from "./App2";
import { App3 } from "./App3";
import BookApp from "./BookApp";
import { CustomProviderByMayur } from './BooksAppComponents/contexts/BooksContext';
import CounterApp from './CounterApp';
import NavBarApp from './NavBarApp';
import CounterAppForReducer from './useReducerApp/CounterAppForReducer';



// 2. Get control of your root div element
var rootDiv = document.getElementById('root');

var root = ReactDOM.createRoot(rootDiv);

root.render(
  <CounterAppForReducer/>
);
