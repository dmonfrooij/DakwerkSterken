import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projects";
import SeoLandingPage from "./components/SeoLandingPage";
import DroneInspectie from "./components/DroneInspectie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileCtaBar from "./components/MobileCtaBar";
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
        <Route path="/diensten/:slug" element={<SeoLandingPage mode="services" />} />
        <Route path="/regios/:slug" element={<SeoLandingPage mode="regions" />} />
        <Route path="/drone-inspectie" element={<DroneInspectie />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </BrowserRouter>
  </React.StrictMode>
);
