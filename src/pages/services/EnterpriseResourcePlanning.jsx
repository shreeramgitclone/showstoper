import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import '../../styles/pages/ServicesAndSolutionsCommon.css';
import scrum from "../../assets/undraw_scrum-board_uqku.svg";

const features = [
  ["Modularity: Modules for specific functions (e.g., accounting, inventory, payroll)"],
  ["Integration: Seamless data flow between departments."],
  ["Automation: Reduces manual tasks, improving productivity."],
  ["Scalability: Adapts to business growth or changing needs."],
  ["Analytics: Provides insights through reporting and dashboards."],

];

export default function EnterpriseResourcePlanning() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Enterprise Resource Planning</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Smart Solutions for Smarter Business
            </p>
          </motion.div>
        </div>
      </section>
      <div style={{ backgroundColor: "#1d3750", borderBottom: "1px solid #2a3243" }}>
        <div style={{ position: "relative", width: "100%", padding: '2rem', }} className='container mx-auto px-4'>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Enterprise Resource Planning</h2>
          <div className="company-vision-divider mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6 left-aligntext'>Analytics and implementation can be complex, requiring careful planning, customization, and change management.Enterprise Resource Planning (ERP) refers to integrated software systems that manage core business processes, including finance, HR, supply chain, manufacturing, and more.
              ERP systems centralize data, streamline operations, and enable real-time decision-making across an organization.</p>
          </p>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Why Us</h2>
          <div className="company-vision-divider mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6 left-aligntext'>Showstoper adaptable to various industries, and helps businesses stay competitive by optimizing resources and responding to market changes.
              Our Cloud-based ERP also offers flexibility and cost savings compared to traditional on-premise solutions.</p>
          </p>
        </div>
      </div>
      <section className="bg-[#1E344A] py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Content Box */}
          <div className="bg-[#2C2C3F] text-white p-6 md:p-10 rounded-xl flex-1 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Enterprise Resource Planning</h2>
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
              src={scrum}
              alt="scrum"
              className="max-w-xs md:max-w-sm lg:max-w-md"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
