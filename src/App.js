import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Order from "./Component/Order";
import Contact from "./Component/Contact"
import Layout from "./Component/Layout";
import Family from "./Component/family";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/family" element={<Family />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


