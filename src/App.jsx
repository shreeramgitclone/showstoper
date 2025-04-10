import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page imports
import Home from './pages/Home';
import Automation from './pages/it/Automation';
import Robotics from './pages/it/Robotics';
import IOT from './pages/it/IOT';
import Maintenance from './pages/it/Maintenance';
import Company from './pages/about/Company';
import CSR from './pages/about/CSR';
// import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Career from './pages/Career';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Industries from './pages/Industries';
import ScrollToTop from './components/common/ScrollToTop';
import Applications from './pages/services/Applications';
import DigitalTransform from './pages/services/DigitalTransform';
import ManagementInformationSystem from './pages/services/ManagementInformationSystem';
import ArtificialIntelligence from './pages/services/ArtificialIntelligence';
import CyberSecurity from './pages/services/CyberSecurity';
import IotDegitalEngineering from './pages/services/IotDegitalEngineering';
import RevenueManagementSystem from './pages/services/RevenueManagementSystem';
import EnterpriseResourcePlanning from './pages/services/EnterpriseResourcePlanning';
import CustomerRelationshipManagement from './pages/services/CustomerRelationshipManagement';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/applications" element={<Applications />} />
        <Route path="/services/DigitalTransform" element={<DigitalTransform/>} />
        <Route path="/services/ManagementInformationSystem" element={<ManagementInformationSystem/>} />
        <Route path="/services/ArtificialIntelligence" element={<ArtificialIntelligence/>} />
        <Route path="/services/CyberSecurity" element={<CyberSecurity/>} />
        <Route path="/services/IotDegitalEngineering" element={<IotDegitalEngineering/>} />
        <Route path="/services/RevenueManagementSystem" element={<RevenueManagementSystem/>} />
        <Route path="/services/EnterpriseResourcePlanning" element={<EnterpriseResourcePlanning/>} />
        <Route path="/services/CustomerRelationshipManagement" element={<CustomerRelationshipManagement/>} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/it/automation" element={<Automation />} />
        <Route path="/it/robotics" element={<Robotics />} />
        <Route path="/it/iot" element={<IOT />} />
        <Route path="/it/maintenance" element={<Maintenance />} />
        <Route path="/about/company" element={<Company />} />
        <Route path="/about/csr" element={<CSR />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;