import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Eshop from "./pages/Eshop";
import MonCompte from "./pages/MonCompte";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/e-shop" element={<Eshop />} />
            <Route path="/compte" element={<MonCompte />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthContextProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
