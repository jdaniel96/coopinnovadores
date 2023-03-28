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
        <Route path="/coopinnovadores" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutUs" element={<AboutUsView />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}
