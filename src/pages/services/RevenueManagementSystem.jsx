import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import '../../styles/pages/ServicesAndSolutionsCommon.css';
import Revenue from "../../assets/undraw_revenue_kv38.svg";

const features = [
  ["Dynamic Pricing:Adjusts pricing in real-time based on demand, competition, and customer willingness to pay"],
  ["Demand Forecasting:Uses historical data, market trends, and AI/ML algorithms to predict future demand for IT services."],
  ["Customer Segmentation:Groups customers by behavior, industry, or usage patterns to tailor pricing and promotions."],
  ["Real-Time Analytics:Provides dashboards and reports on key performance indicators (KPIs) like revenue per user (ARPU), churn rate, and subscription renewals."],
  ["Integration with IT Systems:Seamlessly connects with CRM (e.g., Salesforce), ERP, billing platforms (e.g., Oracle Revenue Management and Billing), and usage tracking tools to ensure data consistency."],
  ["Competitor Analysis:Monitors competitors’ pricing and features to position services competitively"],

];

export default function RevenueManagementSystem() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Revenue Management System</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Optimizing Revenue with Precision
            </p>
          </motion.div>
        </div>
      </section>
      <section>
        <div style={{ backgroundColor: "#1E344A", borderBottom: "1px solid #2a3243" }}>
          <div style={{ position: "relative", width: "100%", padding: '2rem' }} className='container mx-auto px-4'>
            <h2 className="font-semibold text-white text-center text-3xl mb-2">Revenue Management System</h2>
            <div className="company-vision-divider mb-6"></div>
            <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
              Revenue Management System (RMS) in Information Technology (IT) is a software solution that helps IT companies, particularly those offering software-as-a-service (SaaS), cloud services, or other subscription-based models, optimize pricing, forecast demand, and maximize revenue. It leverages data analytics,
              automation, and real-time insights to align pricing strategies with market demand, customer behavior, and business goals.
            </p>

            <h2 className="font-semibold text-white text-center text-3xl mb-2">Why Us</h2>
            <div className="company-vision-divider-small mb-6"></div>
            <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
              Showstoper offers revenue management solutions to help businesses improve their pricing strategies, optimize product mix, and enhance revenue generation through various tools and services, including Planning Analytics,
              CRM, and consulting services. By leveraging its expertise and technology,
              businesses can achieve higher revenue, lower costs, and improved operational efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1E344A] py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Content Box */}
          <div className="bg-[#2C2C3F] text-white p-6 md:p-10 rounded-xl flex-1 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Revenue Management System</h2>
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
              src={Revenue}
              alt="Revenue"
              className="max-w-xs md:max-w-sm lg:max-w-md"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
