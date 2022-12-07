import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/containers/Footer';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/*" element={<div className="grow"><h1 className="text-3xl mt-12">Sitio no encontrado.</h1></div>} />
      </Routes>
      <Footer />
    </>
  );
}
