import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/homeView";
import Footer from "./components/footer/footer";
import Register from "./views/registerView";
import AboutUsView from "./views/aboutusView";

export default function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route path="https://coopinnovadores.com/" element={<Home />} />
        <Route
          path="https://coopinnovadores.com/register"
          element={<Register />}
        />
        <Route
          path="https://coopinnovadores.com/aboutUs"
          element={<AboutUsView />}
        />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}
