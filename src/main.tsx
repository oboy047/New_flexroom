import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RoomDetail from "./pages/RoomDetail";
import HomePage from "./pages/Landing"; // vi lager en under
import Admin from "./pages/Admin";
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
