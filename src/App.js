import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/homeView";
import Footer from "./components/footer/footer";
import Register from "./views/registerView";

export default function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}
