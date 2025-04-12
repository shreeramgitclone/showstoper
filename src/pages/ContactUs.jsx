import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import '../styles/pages/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare email content
    const emailSubject = encodeURIComponent(`New Contact Form Submission: ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open Gmail compose window with pre-filled data
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=info@showstoper.in&su=${emailSubject}&body=${emailBody}`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content"
          >
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-description">
              Let's discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-section">
        <div className="container mx-auto px-4">
          <div className="contact-info-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="contact-info-card"
            >
              <div className="contact-info-icon ">📍  <span className="contact-info-text ">
                Office No. 106, 1st Floor,
                Thacker Tower, Sector 17, Plot No. 86,
                Beside SaraswatBank, Vashi,
                Navi Mumbai, Maharashtra - 400703
              </span></div>
              <hr />
              <div className="contact-info-icon">📧 <span className="contact-info-text">info@showstoper.in</span>
              </div>
              
              <hr/>
              <div className="contact-info-icon">📱  <span className="contact-info-text">+91 877 998 7040 <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91 750 659 7467</span></div>
             
            </motion.div>

            
{/* Contact Form */}
<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="contact-form"
          >
            <h2 className="contact-form-title">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
              </div>
              <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              <div className="form-group">
                
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="contact-submit-button"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
           
          </div>

          
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs; 