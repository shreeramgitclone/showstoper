import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../layout/Layout';
import '../../styles/components/common/ServiceTemplate.css';

const ServiceTemplate = ({ title, description, features, technologies, benefits }) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="service-hero-content"
          >
            <h1 className="service-hero-title">{title}</h1>
            <p className="service-hero-description">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-section service-section-white">
        <div className="container mx-auto px-4">
         

          <div className="service-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-card-icon">{feature.icon}</div>
                <h3 className="service-card-title">{feature.title}</h3>
                <p className="service-card-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 service-section-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Technologies We Use</h2>
            <div className="w-20 h-1 bg-[#ed1c24] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 service-section-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Benefits</h2>
            <div className="w-20 h-1 bg-[#ed1c24] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-[#ed1c24]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 service-section-gray from-[#1B2C3F] to-[#234156] text-white" style={{borderBottom: "1px solid #2a3243"}}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today to learn more about how we can help transform your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1B2C3F] px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors duration-200"
              onClick={() => window.location.href = '/contact-us'}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceTemplate; 