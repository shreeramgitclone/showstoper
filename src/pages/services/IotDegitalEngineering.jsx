import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import '../../styles/pages/ServicesAndSolutionsCommon.css';

export default function IotDegitalEngineering() {
  return (
    <Layout>
      <section className="career-hero">
        <div className="career-hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="career-hero-content"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Internet of Things (IoT)</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Connecting the Physical and Digital Worlds
            </p>
          </motion.div>
        </div>
      </section>
      <div style={{ backgroundColor: "#1d3750",borderBottom: "1px solid #2a3243" }}>
        <div style={{ position: "relative", width: "100%", padding: '2rem', height: "50vh" }} className='container mx-auto px-4'>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Internet of Things (IoT)</h2>
          <div className="company-vision-divider mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6'>Unravel the benefits of Digital Transformation Solutions to helps your businesses transition from traditional models to digitally-driven ones. This is why we embrace our customers and deliver transformative solutions to address their unique business challenges and determined to make a difference.</p>
          </p>
        </div>
      </div>
    </Layout>
  )
}
