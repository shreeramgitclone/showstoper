import React from "react";
import "../../styles/components/common/expertteam.css";
import styled from 'styled-components';
import "../../styles/components/common/expertteam.css";
import { AiOutlineCloud, AiOutlineMail , AiOutlineBug, AiOutlineRobot,AiOutlinePieChart  } from "react-icons/ai";
import { IoHardwareChipOutline } from "react-icons/io5";

const cardData = [
  {
    color: "#0a3cff",
    icon: <AiOutlineRobot size={48} />, 
    title: " ARTIFICIAL INTTELIGENCE",
    text: "Advanced AI and analytics capabilities"
  },
  {
    color: "#ff5722",
    icon: <AiOutlineCloud size={48} />, 
    title: "CLOUD SERVER MANAGEMENT & MIS",
    text: "Comprehensive cloud services and solutions"
  },
  {
    color: "#009688",
    icon: <AiOutlineBug size={48} />, 
    title: "CYBERSECURITY & TRAINING",
    text: "Defend, detect, and educate with cutting-edge cybersecurity"
  },
  {
    color: "#ff9800",
    icon: <IoHardwareChipOutline size={48} />, 
    title: "IOT & TESTING",
    text: "End-to-end IoT solutions with precision testing"
  },
  {
    color: "#9c27b0",
    icon: <AiOutlinePieChart  size={48} />, 
    title: "CRM & ERP SOLUTIONS",
    text: "Integrated business processes and customer insights"
  },
  {
    color: "#4caf50",
    icon: <AiOutlineMail  size={48} />, 
    title: "DIGITALX & MARKETING",
    text: "Targeted campaigns that drive real results"
  }
];

export default function ExpertTeam() {
  return (
    <div className="ExpertTeam">
      <p className="text-center text-4xl m-2 text-white mt-20 Expertise" >Our Areas of Expertise</p>
      <p className="text-center text-base text-gray-300">We are experts professionals who are continuously working for esteemed brands globally</p>
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

  );
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