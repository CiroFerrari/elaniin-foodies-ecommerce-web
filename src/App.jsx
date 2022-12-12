import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/containers/Footer';
import NavBarDeprecated from './components/containers/NavBarDeprecated';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import NoPage from './components/pages/NoPage';

export default function App() {
  return (
    <>
      <NavBarDeprecated />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}
