import React from 'react';
import Layout from '../../components/layout/Layout';
import '../../styles/pages/ServicesAndSolutionsCommon.css';
import { AiOutlineCloud, AiOutlineBug, AiOutlineRobot } from "react-icons/ai";
import { IoHardwareChipOutline } from "react-icons/io5";
import styled from 'styled-components';
import { motion } from 'framer-motion';

const cardData = [
  {
    color: "#0a3cff",
    icon: <AiOutlineRobot size={48} />,
    title: "Centralized Data Management",
    text: "MIS consolidates data from various sources into a single system, making it easier to store, retrieve, and manage information. For a web portal, this ensures that user data, content, and operational details are organized and accessible in one place."
  },
  {
    color: "#ff5722",
    icon: <AiOutlineCloud size={48} />,
    title: "Enhanced Efficiency",
    text: "By automating routine tasks such as data collection, report generation, and updates, an MIS reduces manual work. On a web portal, this could translate to faster content updates, automated user notifications, or streamlined customer support processes."
  },
  {
    color: "#009688",
    icon: <AiOutlineBug size={48} />,
    title: "Better User Experience",
    text: "With MIS, a web portal can offer personalized experiences by analyzing user behavior and preferences. For example, it can recommend content or services tailored to individual users, improving satisfaction and retention."
  },
  {
    color: "#ff9800",
    icon: <IoHardwareChipOutline size={48} />,
    title: "Cost Reduction",
    text: "Automation and optimized resource management through MIS can lower operational costs. For a web portal, this might mean reduced server downtime, efficient bandwidth usage, or fewer staff hours spent on manual data handling."
  },
  {
    color: "#9c27b0",
    icon: <AiOutlineRobot size={48} />,
    title: "Scalability",
    text: "An MIS supports growth by handling increasing amounts of data and users without compromising performance. A web portal can expand its services or user base seamlessly with a robust MIS backbone."
  },
  {
    color: "#4caf50",
    icon: <AiOutlineRobot size={48} />,
    title: "Enhanced Security",
    text: "MIS often includes tools for monitoring and protecting data, which is critical for a web portal handling sensitive user information (e.g., personal details, payment data). This helps in maintaining trust and compliance with regulations."
  }
];

export default function ManagementInformationSystem() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Management Information System</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Integrating Technology and Business Strategy
            </p>
          </motion.div>
        </div>
      </section>
      <div style={{ backgroundColor: "#1d3750", borderBottom: "1px solid #2a3243" }}>
        <div style={{ position: "relative", width: "100%", height: "max-content", padding: '2rem' }} className='container mx-auto px-4'>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Management Information System</h2>
          <div className="company-vision-divider mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6'>A well-implemented MIS can help a web portal stand out by offering faster services, reliable uptime, and data-driven features that competitors might lack.
            Integrating an MIS into a web portal empowers businesses or organizations to operate more efficiently, deliver superior user experiences, and adapt to changing demands—all while keeping costs and risks in check.</p>
          </p>
        </div>
        <StyledWrapper>
          <div className="grid-container">
            {cardData.map((item, index) => (
              <div className="card" key={index} style={{ background: item.color }}>
                <div className="content">
                  {item.icon}
                  <h3 className="title">{item.title}</h3>
                  <p className="para">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </StyledWrapper>
      </div>
    </Layout>
  )
}

const StyledWrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1000px;
  }

  .card {
    position: relative;
    display: flex;
    justify-content: center;
    width: 320px;
    border-radius: 12px;
    line-height: 1.6;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 36px;
    border-radius: 22px;
    color: #ffffff;
    overflow: hidden;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content svg {
    width: 48px;
    height: 48px;
  }

  .content .para {
    z-index: 1;
    opacity: 1;
    font-size: 18px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover {
    transform: translate(0px, -16px);
  }

  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;