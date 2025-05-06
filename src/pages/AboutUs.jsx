import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import '../styles/pages/AboutUs.css';

const AboutUs = () => {
  const stats = [
    { number: '5+', label: 'Years of Excellence' },
    { number: '50+', label: 'Experts' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Building trust through transparent relationships'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Delivering quality in everything we do'
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'Continuous learning and improvement'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <h1 className="about-hero-title">About Showstoper</h1>
            <p className="about-hero-description">
              Simplifying Complexity, Delivering Innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section about-section-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-story"
          >
            <h2 className="about-story-title">Our Story</h2>
            <p className="about-story-text">
              Founded in 2020, Showstoper Technologies has been at the forefront of digital innovation. 
              We started with a vision to transform how businesses leverage technology, and today, 
              we&apos;re proud to be trusted partners in digital transformation for organizations across industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="about-stats-grid"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="about-stat-card"
              >
                <h3 className="about-stat-number">{stat.number}</h3>
                <p className="about-stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiencyand competitive advantage in the digital age.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading technology partner for businesses worldwide, 
                known for our innovation, reliabilityand commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="about-section about-section-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="about-story-title">Our Values</h2>
            <p className="about-story-text">
              The principles that guide us in delivering excellence
            </p>
          </motion.div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="about-value-card"
              >
                <div className="about-value-icon">{value.icon}</div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="about-cta-title">Ready to Transform Your Business?</h2>
            <p className="about-cta-text">
              Join hands with us to leverage cutting-edge technology solutions for your business growth
            </p>
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="about-cta-button"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs; 