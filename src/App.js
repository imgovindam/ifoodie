import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Meals from "./Components/Meals";
import Favourites from "./Components/Favourites";
import MealGenerator from "./Components/MealGenerator";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<Meals />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/random-meal" element={<MealGenerator />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
