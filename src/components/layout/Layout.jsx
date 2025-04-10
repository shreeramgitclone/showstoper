import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../styles/components/layout/Layout.css';

const Layout = ({ children }) => {
  return (
    // Commenting out the gradient background for now
    // <div className="min-h-screen bg-[#1B2C3F]">
    <div className="layout">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 