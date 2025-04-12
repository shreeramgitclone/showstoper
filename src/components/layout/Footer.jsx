import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/layout/Footer.css';
import whiteLogo from '../../assets/St-03 wht.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="border-b-4 md:border-b-0 md:border-r-2 border-gray-400">
            <Link to="/" className="flex items-center">
              <img
                src={whiteLogo}
                alt="Showstoper Logo"
                className="h-16 w-auto"
              />
            </Link>
            <br />
            <div >
            <ul className="space-y-2">
              <li className="footer-text">Email: info@showstoper.in</li>
              <li className="footer-text">Phone: +91 877 998 7040</li>
              <li className="footer-text">📍: Office No. 106, 1st Floor, Thacker Tower, Sector 17, Plot No. 86,Beside Saraswat Bank, Vashi,Navi Mumbai, Maharashtra - 400703</li>

              
            </ul>
            </div>
          </div>
          <div >
            <h3 className="footer-title ">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about-us" className="footer-link">About</Link></li>
              {/* <li><Link to="/careers" className="footer-link">Careers</Link></li> */}
              <li><Link to="" className="footer-link">Careers</Link></li>
              {/* <li><Link to="/contact" className="footer-link">Contact</Link></li> */}
              <li><Link to="" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Services</h3>
            <ul className="space-y-2">
              {/* <li><Link to="/it/automation" className="footer-link">Automation</Link></li>
              <li><Link to="/it/robotics" className="footer-link">Robotics</Link></li>
              <li><Link to="/it/iot" className="footer-link">IOT</Link></li>
              <li><Link to="/it/maintenance" className="footer-link">Maintenance & Service</Link></li> */}
              <li><Link to="" className="footer-link">Mobile and Desktop Applications</Link></li>
              <li><Link to="" className="footer-link">Digital Transformation</Link></li>
              <li><Link to="" className="footer-link">Management Information Systems</Link></li>
              <li><Link to="" className="footer-link">Artificial Intelligence</Link></li>
              <li><Link to="" className="footer-link">Cyber Security</Link></li>
              
            </ul>
          </div>
          <div>
            
            <ul className="space-y-2">
              {/* <li><Link to="/it/automation" className="footer-link">Automation</Link></li>
              <li><Link to="/it/robotics" className="footer-link">Robotics</Link></li>
              <li><Link to="/it/iot" className="footer-link">IOT</Link></li>
              <li><Link to="/it/maintenance" className="footer-link">Maintenance & Service</Link></li> */}
              <li><Link to="" className="footer-link">IOT and Digital Engineering</Link></li>
              <li><Link to="" className="footer-link">Revenue Management System</Link></li>
              <li><Link to="" className="footer-link">Customer Relationship Management</Link></li>
              <li><Link to="" className="footer-link">Enterprise Resource Planning</Link></li>
              <li><Link to="" className="footer-link">Dairy Solution</Link></li>
              <li><Link to="" className="footer-link">Consulting and Outsourcing</Link></li>

            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} showstoper All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 