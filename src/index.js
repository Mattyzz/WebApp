import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/**
       * Home is nested in the main page. And is cosidered a child of /
       */}
      <Route path="/" element={<App />} >
        <Route path="Home" element={<Home />} />
        <Route path="/Page2" element={<Page2 />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
