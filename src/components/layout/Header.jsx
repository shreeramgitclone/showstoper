import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import whiteLogo from '../../assets/St-03 wht.png';
import cyclingheaderimg from '../../assets/cycling_header_img.gif';
import '../../styles/components/layout/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setIsHeroSection(scrollPosition < window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  const handleMouseEnter = useCallback((path) => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setActiveDropdown(path);
  }, [closeTimeout]);

  const handleMouseLeave = useCallback((path) => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setCloseTimeout(timeout);
  }, []);

  const navItems = [
    {
      label: 'Home',
      path: '/',
      dropdown: [
        { label: 'About Us', path: '/about-us' },
        { label: 'Contact Us', path: '/contact-us' },
      ]
    },
    {
      label: 'Services And Solution',
      path: '/services',
      // dropdown: [
      //   { label: 'Mobile and Desktop Applications', path: '/services/applications' },
      //   { label: 'Digital Transformation', path: '/services/digital-transformation' },
      //   { label: 'Management Information Systems', path: '/services/mis' },
      //   { label: 'Artificial Intelligence', path: '/services/ai' },
      //   { label: 'Cyber Security', path: '/services/cyber-security' },
      //   { label: 'IOT and Digital Engineering', path: '/services/iot' },
      //   { label: 'Revenue Management System', path: '/services/rms' },
      //   { label: 'Customer Relationship Management', path: '/services/crm' },
      //   { label: 'Enterprise Resource Planning', path: '/services/erp' },
      //   { label: 'Dairy Solution', path: '/services/dairy' },
      //   { label: 'Consulting and Outsourcing', path: '/services/consulting' },
      //   { label: 'Data Science and Analytics', path: '/services/data-science' }
      // ]

      dropdown: [
        { label: 'Mobile and Desktop Applications', path: '/services/applications' },
        { label: 'Digital Transformation', path: '/services/DigitalTransform' },
        { label: 'Management Information Systems', path: '/services/ManagementInformationSystem' },
        { label: 'Artificial Intelligence', path: '/services/ArtificialIntelligence'},
        { label: 'Cyber Security', path: '/services/CyberSecurity' },
        { label: 'IOT and Digital Engineering', path: '/services/IotDegitalEngineering' },
        { label: 'Revenue Management System', path: '/services/RevenueManagementSystem' },
        { label: 'Customer Relationship Management', path: '/services/CustomerRelationshipManagement' },
        { label: 'Enterprise Resource Planning', path: '/services/EnterpriseResourcePlanning' },
        { label: 'Dairy Solution', path: '/services' },
        { label: 'Consulting and Outsourcing', path: '/services' },
        { label: 'Data Science and Analytics', path: '/services'}
      ]
    },
    {
      label: 'Industries',
      path: '/industries',
      // dropdown: [
      //   { label: 'Pharma Engineering', path: '/industries/pharma' },
      //   { label: 'Health Industries', path: '/industries/health' },
      //   { label: 'Banking and Finance', path: '/industries/banking' },
      //   { label: 'Dairy Industries', path: '/industries/dairy' },
      //   { label: 'Education and Engineering', path: '/industries/education' },
      //   { label: 'Agriculture', path: '/industries/agriculture' },
      // ]
      dropdown: [
        { label: 'Pharma Engineering', path: '/industries' },
        { label: 'Health Industries', path: '/industries' },
        { label: 'Banking and Finance', path: '/industries' },
        { label: 'Dairy Industries', path: '/industries' },
        { label: 'Education and Engineering', path: '/industries' },
        { label: 'Agriculture', path: '/industries' },
      ]
    },
    {
      label: 'Career',
      path: '/career',
    }
  ];

  const Dropdown = ({ items, isVisible, parentPath }) => (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => handleMouseEnter(parentPath)}
          onMouseLeave={() => handleMouseLeave(parentPath)}
          className={`dropdown ${isScrolled ? 'dropdown-scrolled' : 'dropdown-transparent'} ${parentPath === '/services' ? 'w-80' : 'w-64'}`}
        >
          <div className="dropdown-content">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`dropdown-link ${isScrolled ? 'dropdown-link-scrolled' : 'dropdown-link-transparent'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header 
      className={`header ${
        isScrolled 
          ? 'header-scrolled'
          : isHeroSection
            ? 'header-hero'
            : 'header-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={whiteLogo}
              alt="Showstoper Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div 
                key={item.path} 
                className="relative group"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.path)}
                onMouseLeave={() => item.dropdown && handleMouseLeave(item.path)}
              >
                {item.dropdown ? (
                  <>
                    <div className="flex items-center">
                      <Link
                        to={item.path}
                        className={`px-3 py-2 rounded-md flex items-center ${
                          isScrolled
                            ? 'text-white'
                            : isHeroSection
                              ? 'text-white/90'
                              : 'text-white/90'
                        } transition-colors duration-200`}
                      >
                        <span className="flex items-center gap-2">
                          {item.label}
                        </span>
                      </Link>
                      <button
                        onClick={() => handleMouseEnter(item.path)}
                        className="p-2"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.path ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {item.dropdown && (
                      <div className="absolute left-0 pt-2">
                        <Dropdown
                          items={item.dropdown}
                          isVisible={activeDropdown === item.path}
                          parentPath={item.path}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md flex items-center ${
                      isScrolled
                        ? 'text-white'
                        : isHeroSection
                          ? 'text-white/90'
                          : 'text-white/90'
                    } transition-colors duration-200`}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden mt-4 rounded-lg shadow-lg overflow-hidden ${
                isScrolled 
                  ? 'bg-gradient-to-r from-[#1B2C3F] via-[#1E3344] to-[#234156] backdrop-blur-lg'
                  : isHeroSection 
                    ? 'bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_4px_30px_rgba(255,255,255,0.1)]' 
                    : 'bg-white'
              }`}
            >
              <nav className="py-2">
                {navItems.map((item) => (
                  <div key={item.path}>
                    {item.dropdown ? (
                      <>
                        <button
                          className={`w-full px-4 py-2 text-left flex justify-between items-center ${
                            isScrolled || isHeroSection
                              ? 'text-white hover:bg-white/10' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setActiveDropdown(activeDropdown === item.path ? null : item.path)}
                        >
                          {item.label}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.path ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeDropdown === item.path && (
                          <div className={`py-2 ${
                            isScrolled ? 'bg-gradient-to-r from-[#1B2C3F] via-[#1E3344] to-[#234156]' : isHeroSection ? 'bg-white/5' : 'bg-gray-50'
                          }`}>
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                to={dropdownItem.path}
                                className={`block px-8 py-2 text-sm ${
                                  isScrolled || isHeroSection
                                    ? 'text-white/90 hover:text-white hover:bg-white/10' 
                                    : 'text-gray-600 hover:text-primary'
                                }`}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 ${
                          isScrolled || isHeroSection
                            ? 'text-white hover:bg-white/10' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 