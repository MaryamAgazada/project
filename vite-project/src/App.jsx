import { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from './layout/AdminLayout/AdminLayout';
import MainLayout from './layout/MainLayout/MainLayout';
import Admin from './pages/MainPages/AdminPage/Admin';
import Product from './pages/AdminPages/Product/Product';
import Add from './pages/AdminPages/Add/Add';
import Update from './pages/AdminPages/Update/Update';
import Home from './pages/MainPages/home/Home';
import Detail from './pages/Detail/Detail';
import Basket from './pages/Basket/Basket';
import MainProvider from './contex/MainProvider';
function App() {

  return (
    <>
      <HelmetProvider>
        <MainProvider>
         <BrowserRouter>
      <Routes>
       {/* main */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Route>
        {/* admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin/>} />
          <Route path="product" element={<Product/>} />
          <Route path="add" element={<Add />} />
          <Route path="update" element={<Update />} />
          <Route path="Basket" element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </HelmetProvider>
    </>
  )
}

export default App
