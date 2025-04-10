import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import '../styles/pages/Career.css';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleEmailRedirect = () => {
    const subject = encodeURIComponent('Job Application - ' + formData.position);
    const body = encodeURIComponent(`
Dear Hiring Manager,

Please find my job application details below:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Position Applied For: ${formData.position}
Years of Experience: ${formData.experience}

Cover Letter:
${formData.message}

Looking forward to hearing from you.

Best regards,
${formData.name}
    `);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=info@showstoper.in&su=${subject}&body=${body}`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="career-hero-content"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Be part of our innovative journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 service-section-white" style={{borderBottom: "1px solid #2a3243"}}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="text-purple-600 text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                  <p className="text-gray-600">Work on cutting-edge technologies and innovative solutions</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="text-purple-600 text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-gray-600">Continuous learning and career development programs</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="text-purple-600 text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
                  <p className="text-gray-600">Collaborative environment with work-life balance</p>
                </motion.div>
              </div>
            </div>

            <div className="service-section-white rounded-xl">
              <form onSubmit={(e) => { e.preventDefault(); handleEmailRedirect(); }} className="career-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="name" className="career-form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="career-form-input"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="email" className="career-form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="career-form-input"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="phone" className="career-form-label">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="career-form-input"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="position" className="career-form-label">Position</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="career-form-input"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="experience" className="career-form-label">Years of Experience</label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="career-form-input"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="md:col-span-2"
                  >
                    <label htmlFor="message" className="career-form-label">Cover Letter</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="career-form-input career-form-textarea"
                    ></textarea>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="md:col-span-2"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume / CV
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-purple-500 transition-colors duration-200">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="resume"
                              type="file"
                              className="sr-only"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, DOCX up to 10MB
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                    type="submit"
                  >
                    Submit Application
                  </motion.button>
                  <motion.a
                    href="https://www.linkedin.com/company/showstoper"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Apply via LinkedIn
                  </motion.a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Career; 