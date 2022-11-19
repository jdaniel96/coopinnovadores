import React from "react";
import "./App.css";
import Home from "./views/homeView";
import Register from "./views/registerView";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/nav/navbar";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}
