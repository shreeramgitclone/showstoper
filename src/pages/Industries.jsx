import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Industries = () => {
  const industries = [
    {
      title: 'Pharma Engineering',
      path: '/industries/pharma',
      description: 'Advanced solutions for pharmaceutical manufacturing and research',
      icon: '💊'
    },
    {
      title: 'Health Care Industries',
      path: '/industries/health',
      description: 'Digital transformation for healthcare providers',
      icon: '🏥'
    },
    {
      title: 'Banking and Finance',
      path: '/industries/banking',
      description: 'Secure and efficient solutions for financial institutions',
      icon: '🏦'
    },
    {
      title: 'Dairy Industries',
      path: '/industries/dairy',
      description: 'Smart solutions for dairy production and distribution',
      icon: '🥛'
    },
    {
      title: 'Education and Engineering',
      path: '/industries/education',
      description: 'Innovative solutions for educational institutions',
      icon: '🎓'
    },
    {
      title: 'Agriculture',
      path: '/industries/agriculture',
      description: 'Technology solutions for modern farming',
      icon: '🌾'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden pt-20 services-hero">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Specialized solutions for diverse industry needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 service-section-white" style={{borderBottom: "1px solid #2a3243"}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link
                  to={industry.path}
                  className="block p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 flex-grow">{industry.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries; 