import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import AboutView from "./views/About";
import Todo from "./views/Todo";
import TrafficLight from "./views/TrafficLight";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Product from "./views/Product.jsx";
const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Comienzan las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/traffic-light" element={<TrafficLight />} />
        <Route path="/todo-list" element={<Todo />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<h1>404 Pagina no encontrada</h1>} />
      </Routes>
      {/* Terminan las rutas */}
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
