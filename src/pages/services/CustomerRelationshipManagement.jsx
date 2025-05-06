import React from 'react';
import Layout from '../../components/layout/Layout';
import '../../styles/pages/ServicesAndSolutionsCommon.css';
import { motion } from 'framer-motion';
import customerrelation from "../../assets/undraw_customer-survey_2l89.svg";

const features = [
  ["Centralized Data: Stores customer information (contacts, interactions, purchase history) in one place for easy access and organization."],
  ["Improved Customer Relationships: Tracks customer interactions, preferences, and issues, enabling personalized communication and better service."],
  ["Sales Efficiency: Automates tasks like lead tracking, follow-ups, and pipeline management, helping sales teams close deals faster."],
  ["Better Decision-Making: Provides analytics and reports on customer behavior, sales trends, and campaign performance to inform strategies."],
  ["Team Collaboration: Enables multiple departments (sales, marketing, support) to share customer data and work cohesively."],
  ["Customer Retention: Helps identify at-risk customers and nurture loyalty through targeted engagement."],
  ["Scalability: Supports business growth by streamlining processes and handling increasing customer data"],
];

export default function CustomerRelationshipManagement() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Customer Relationship Management</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Smart Solutions for Lasting Relationships
            </p>
          </motion.div>
        </div>
      </section>
      <div style={{ backgroundColor: "#1d3750",borderBottom: "1px solid #2a3243" }}>
        <div style={{ position: "relative", width: "100%", padding: '2rem', height: "50vh" }} className='container mx-auto px-4'>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Customer Relationship Management</h2>
          <div className="company-vision-divider mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6 left-aligntext'>Customer Relationship Management (CRM) software tool is designed to help businesses manage interactions with current and potential customers, streamline processes, and improve profitability.
               It centralizes customer data, tracks communications, and automates tasks to enhance sales, marketing, and customer service efforts.</p>
          </p>

          <h2 className="font-semibold text-white text-center text-3xl mb-2">Why Us</h2>
          <div className="company-vision-divider-small mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6 left-aligntext'>Showstoper provides customized  CRM tools to  boost efficiency, enhances customer satisfaction,
               and drives revenue by organizing and leveraging customer relationships effectively.</p>
          </p>
        </div>
      </div>
      <section className="bg-[#1E344A] py-12 px-4 md:px-16">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left: Content Box */}
                <div className="bg-[#2C2C3F] text-white p-6 md:p-10 rounded-xl flex-1 shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Customer Relationship Management</h2>
                  <hr className="border-gray-600 mb-6" />
                  <ul className="space-y-4 text-sm md:text-base">
                    {features.map(([title, desc], index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#ed1c24] text-lg mt-0.5">✔️</span>
                        <span>
                          <span className="font-semibold">{title}</span> {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
      
                {/* Right: Illustration */}
                <div className="flex-1 flex justify-center">
                  <img
                    src={customerrelation}
                    alt="customerrelation"
                    className="max-w-xs md:max-w-sm lg:max-w-md"
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </div>
              </div>
            </section>
    </Layout>
  )
}
