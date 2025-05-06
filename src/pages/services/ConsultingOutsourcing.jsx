import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import '../../styles/pages/ServicesAndSolutionsCommon.css';
import developeractivity from "../../assets/undraw_developer-activity_dn7p.svg";

const features = [
  ["Real-World Project Exposure: Integrate training with live or simulated projects, giving you hands-on experience with tools, workflows, and challenges faced in actual software development. Training institutes typically focus on theoretical concepts or outdated projects, which may not reflect current industry demands."],
  ["Industry-Relevant Curriculum: Desigened training programs aligned with their operational needs and market trends, ensuring you learn cutting-edge technologies (e.g., cloud computing, DevOps, AI). Institutes may follow generic or static syllabi, which can lag behind industry advancements."],
  ["Mentorship by Professionals: You’re guided by experienced developers or engineers who work on real projects, offering practical insights and feedback. In contrast, institute trainers may lack recent industry experience, limiting their ability to provide current, actionable advice."],
  ["Networking Opportunities: Training with an IT company connects you with professionals, team leads, and potential employers within the organization. This can lead to job opportunities or references. Institutes rarely offer such direct industry connections."],
];

export default function ConsultingOutsourcing() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Training & Outsourcing</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Smart Solutions for Smarter Business
            </p>
          </motion.div>
        </div>
      </section>
      <div style={{ backgroundColor: "#1d3750", borderBottom: "1px solid #2a3243", paddingBottom: "80px" }}>
        <div style={{ position: "relative", width: "100%", padding: '2rem', height: "50vh" }} className='container mx-auto px-4'>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Training & Outsourcing</h2>
          <div className="company-vision-divider mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6 left-aligntext'>Training involves developing skills, knowledge, or competencies, typically for employees, to improve performance or adapt to new technologies, processes, or roles. It can be conducted in-house (by internal trainers or departments) or outsourced to external providers like training firms, e-learning platforms, or consultants.

              Outsourcing is the practice of delegating specific business processes or functions to third-party providers, often to reduce costs, access expertise, or focus on core activities. Outsourcing can include training-related services, such as hiring external vendors to design and deliver training programs</p>
          </p>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Why Us</h2>
          <div className="company-vision-divider-small mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6 left-aligntext'>Showstoper offers distinct advantages over a training institute, particularly for those aiming to build practical, industry-relevant software skills.</p>
          </p>
        </div>
      </div>
      <section className="bg-[#1E344A] py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Content Box */}
          <div className="bg-[#2C2C3F] text-white p-6 md:p-10 rounded-xl flex-1 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Training & Outsourcing</h2>
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
              src={developeractivity}
              alt="developeractivity"
              className="max-w-xs md:max-w-sm lg:max-w-md"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
