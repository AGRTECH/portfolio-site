import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className=""></div>
    </BrowserRouter>
  );
};

export default App;
