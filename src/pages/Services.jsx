import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import '../styles/pages/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Mobile and Desktop Applications',
      path: '/services/applications',
      description: 'Custom application development for mobile and desktop platforms',
      icon: '📱'
    },
    {
      title: 'Digital Transformation',
      path: '/services/digital-transformation',
      description: 'End-to-end digital transformation solutions',
      icon: '🔄'
    },
    {
      title: 'Management Information Systems',
      path: '/services/mis',
      description: 'Comprehensive MIS solutions for better decision making',
      icon: '📊'
    },
    {
      title: 'Artificial Intelligence',
      path: '/services/ai',
      description: 'AI-powered solutions for business automation',
      icon: '🤖'
    },
    {
      title: 'Cyber Security',
      path: '/services/cyber-security',
      description: 'Advanced security solutions for digital assets',
      icon: '🔒'
    },
    {
      title: 'IOT and Digital Engineering',
      path: '/services/iot',
      description: 'Connected solutions for the modern world',
      icon: '🌐'
    },
    {
      title: 'Revenue Management System',
      path: '/services/rms',
      description: 'Optimize revenue streams with smart management',
      icon: '💰'
    },
    {
      title: 'Customer Relationship Management',
      path: '/services/crm',
      description: 'Build stronger customer relationships',
      icon: '🤝'
    },
    {
      title: 'Enterprise Resource Planning',
      path: '/services/erp',
      description: 'Streamline business operations with ERP',
      icon: '🏢'
    },
    {
      title: 'Dairy Solution',
      path: '/services/dairy',
      description: 'Specialized solutions for dairy industry',
      icon: '🥛'
    },
    {
      title: 'Consulting and Outsourcing',
      path: '/services/consulting',
      description: 'Expert consulting and reliable outsourcing',
      icon: '💼'
    },
    {
      title: 'Data Science and Analytics',
      path: '/services/data-science',
      description: 'Transform data into actionable insights',
      icon: '📈'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-hero-content"
          >
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-description">
              Comprehensive solutions to drive your business forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 service-section-white" style={{borderBottom: "1px solid #2a3243"}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link
                  to={service.path}
                  className="block p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services; 