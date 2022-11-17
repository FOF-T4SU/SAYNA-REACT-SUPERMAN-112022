import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Eshop from "./pages/Eshop";
import MonCompte from "./pages/MonCompte";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/e-shop" element={<Eshop />} />
          <Route path="/compte" element={<MonCompte />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
