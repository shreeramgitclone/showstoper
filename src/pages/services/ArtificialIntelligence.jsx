import React from 'react';
import Layout from '../../components/layout/Layout';
import '../../styles/pages/ServicesAndSolutionsCommon.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Artificialinteligence from "../../assets/undraw_artificial-intelligence_fuvd.svg";
const features = [
  "Efficiency: Speeds up content creation (text, images, etc.) dramatically.",
  "Personalization: Customizes outputs to individual needs or preferences.",
  "Cost Savings: Reduces expenses by automating labor-intensive tasks.",
  "Scalability: Handles large-scale tasks effortlessly.",
  "Accessibility: Empowers non-experts to produce professional results.",
  "Data Enhancement: Creates synthetic data for training or testing.",
  "Always On: Delivers results anytime, without downtime.",
];

export default function ArtificialIntelligence() {


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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Artificial intelligence</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Shaping Tomorrow with Smart Machines
            </p>
          </motion.div>
        </div>
      </section>
      <section>
        <div style={{ backgroundColor: "#1d3750", borderBottom: "1px solid #2a3243" }}>
          <div style={{ position: "relative", width: "100%", height: "max-content", padding: '2rem' }} className='container mx-auto px-4'>
            <h2 className="font-semibold text-white text-center text-3xl mb-2">Artificial intelligence</h2>
            <div className="company-vision-divider mb-6"></div>
            <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
              <p className='text-center mb-6'>Artificial Intelligence (AI) is the next gen frontier of digital world. AI is revolutionizing the way we work, create, interact, transforms & powers every industry from medical imaging, improved supply chain management, customer relationship management, generative AI and speech recognition and infinite applicable scopes to solve problems in new ways, improving efficiency, and accelerating all round growth of businesses.</p>

            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#1E344A] py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Content Box */}
          <div className="bg-[#2C2C3F] text-white p-6 md:p-10 rounded-xl flex-1 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Artificial Intelligence</h2>
            <hr className="border-gray-600 mb-6" />
            <ul className="space-y-4 text-sm md:text-base">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 text-lg">✔️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Illustration */}
          <div className="flex-1 flex justify-center">

            <img
              src={Artificialinteligence}
              alt="Artificialinteligence"
              className="max-w-xs md:max-w-sm lg:max-w-md"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

