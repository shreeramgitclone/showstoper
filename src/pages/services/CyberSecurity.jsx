import React from 'react';
import Layout from '../../components/layout/Layout';
import '../../styles/pages/ServicesAndSolutionsCommon.css';
import styled from 'styled-components';
import { AiOutlineCloud, AiOutlineBug, AiOutlineRobot } from "react-icons/ai";
import { IoHardwareChipOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

const cardData = [
  {
    color: "#0a3cff",
    icon: <AiOutlineRobot size={48} />,
    title: "Protection Against Threats",
    text: "Cybersecurity safeguards sensitive data and systems from cyberattacks like malware, phishing, ransomware, and hacking attempts, reducing the risk of data breaches and system compromise."
  },
  {
    color: "#ff5722",
    icon: <AiOutlineCloud size={48} />,
    title: "Data Privacy and Integrity",
    text: "Data Privacy and Integrity: It ensures that personal, financial, and confidential information remains secure and unaltered, maintaining trust and compliance with privacy regulations (e.g., GDPR, CCPA)."
  },
  {
    color: "#009688",
    icon: <AiOutlineBug size={48} />,
    title: "Business Continuity",
    text: "By preventing disruptions from cyber incidents, robust cybersecurity measures help organizations avoid downtime, maintain operations, and minimize financial losses."
  },
  {
    color: "#ff9800",
    icon: <IoHardwareChipOutline size={48} />,
    title: "Cost Savings",
    text: "Proactively investing in cybersecurity reduces the potential costs associated with breaches, such as legal fees, fines, remediation efforts, and reputational damage."
  },
  {
    color: "#9c27b0",
    icon: <AiOutlineRobot size={48} />,
    title: "Reputation and Trust",
    text: "Strong cybersecurity builds confidence among customers, partners, and stakeholders, demonstrating a commitment to protecting their information and interests."
  },
  {
    color: "#4caf50",
    icon: <AiOutlineRobot size={48} />,
    title: "Prevention of Financial Loss",
    text: "It mitigates risks of theft, fraud, or extortion (e.g., ransomware payments), preserving financial resources for individuals and businesses alike."
  }
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Cyber Security</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your Shield Against Cyber Threats
            </p>
          </motion.div>
        </div>
      </section>
      <div className='ExpertTeam' style={{borderBottom: "1px solid #2a3243"}}>
        <div className="container mx-auto px-4">
          <p className="text-center text-4xl m-2 text-white">Cyber Security</p>
          <div className="company-vision-divider mb-6"></div>
          <p className="text-center text-base text-gray-300 mt-2">Cybersecurity is the most significant & essential security aspect of today’s world. When it comes to unparalleled Cybersecurity topics across various sectors we provide the best in class support. The world is inextricably linked and livelihoods connected to having a secure online experience. We are the strategic partners to walk by your side to protect your digital world. Efficiency: Speeds up content creation (text, images, etc.) dramatically. Personalization: Customizes outputs to individual needs or preferences. Cost Savings: Reduces expenses by automating labor-intensive tasks. Creativity Boost: Sparks new ideas and innovative designs. Scalability: Handles large-scale tasks effortlessly. Accessibility: Empowers non-experts to produce professional results. Data Enhancement: Creates synthetic data for training or testing. Always On: Delivers results anytime, without downtime. Cybersecurity Cybersecurity is the most significant & essential security aspect of today’s world. When it comes to unparalleled Cybersecurity topics across various sectors we provide the best in class support. The world is inextricably linked and livelihoods connected to having a secure online experience. We are the strategic partners to walk by your side to protect your digital world.        </p>
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
    align-items: center;
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
