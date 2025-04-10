import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../../styles/components/common/MaintenancePage.css';

const MaintenancePage = () => {
  return (
    <div className="maintenance-container">
      <Header />
      <div className="maintenance-content">
        <div className="maintenance-box">
          <h1 className="maintenance-title">
            Page Under Maintenance
          </h1>
          <p className="maintenance-text">
            We're currently working on this page. Please check back soon!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MaintenancePage; 