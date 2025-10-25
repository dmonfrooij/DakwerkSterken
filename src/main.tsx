import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 👇 Scroll altijd naar boven bij routewissel */}
      <ScrollToTop />

      {/* Header altijd zichtbaar */}
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projecten" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
