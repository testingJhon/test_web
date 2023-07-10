import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import ProductDetail from "./pages/product_detail";

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Review from "./pages/host/Review";
import Vans from "./pages/host/Vans";

import Details from "./pages/products/Details";
import Colors from "./pages/products/ColorsList";
import Photos from "./pages/products/Photos";

import "./assets/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetail />}>
              <Route index element={<Photos />} />
              <Route path="colors" element={<Colors />} />
              <Route path="details" element={<Details />} />
            </Route>
          </Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
            <Route path="vans" element={<Vans />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;