import React from 'react';
import Layout from '../../components/layout/Layout';
import '../../styles/pages/ServicesAndSolutionsCommon.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function DigitalTransform() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Digital Transformation</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Empowering Innovation Through Technology
            </p>
          </motion.div>
        </div>
      </section>
      <div style={{ backgroundColor: "#1d3750", borderBottom: "1px solid #2a3243" }}>
        <div style={{ position: "relative", width: "100%", height: "max-content", padding: '2rem' }} className='container mx-auto px-4'>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Digital Transformation </h2>
          <div className="company-vision-divider mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed text-center mt-6">
            <p className='text-center mb-6'>Unravel the benefits of Digital Transformation Solutions to helps your businesses transition from traditional models to digitally-driven ones. This is why we embrace our customers and deliver transformative solutions to address their unique business challenges and determined to make a difference.</p>
            <h2 className="font-semibold text-white text-center text-3xl mb-2">Digital Transformation Technologies</h2>
            <div className="company-vision-divider mb-6"></div>
            <div style={{display: "flex", gap: "20px", justifyContent: "center", alignItems: "center"}} className='mt-6'>
              <StyledWrapper>
                <div className="card">
                  <div className="card__border" />
                  <div className="card_title__container">
                    <span className="card_title">Digital Transformation Technologies</span>
                  </div>
                  <hr className="line" />
                  <ul className="card__list">
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Artificial intelligence</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Hybrid cloud</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Blockchain</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Internet of Things (IoT)</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Microservices</span>
                    </li>
                  </ul>
                </div>
              </StyledWrapper>
              <StyledWrapper>
                <div className="card">
                  <div className="card__border" />
                  <div className="card_title__container">
                    <span className="card_title"> Digital Transformation and Showstoper Tech.</span>
                  </div>
                  <hr className="line" />
                  <ul className="card__list">
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Increased Efficiency</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Improved Customer Experience</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Better Decision-Making</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Increased Agility</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Develop a Clear Strategy</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Build a Strong Team</span>
                    </li>
                    <li className="card__list_item">
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="list_text">Embrace Change</span>
                    </li>
                  </ul>
                </div>
              </StyledWrapper>
            </div>
          </p>
        </div>
      </div>
    </Layout>

  )

}

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(266, 92%, 58%);

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    width: 19rem;
    height: 20rem;
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        hsla(240, 15%, 9%, 1) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;

    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(
      0deg,
      hsl(0, 0%, 100%) -50%,
      hsl(0, 0%, 40%) 100%
    );

    border-radius: 1rem;
  }

  .card .card__border::before {
    content: "";
    pointer-events: none;

    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%), rotate(0deg);
    transform-origin: left;

    width: 200%;
    height: 10rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      hsl(277, 95%, 60%) 40%,
      hsl(277, 95%, 60%) 60%,
      hsla(0, 0%, 40%, 0) 100%
    );

    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .card .card_title__container .card_title {
    font-size: 1rem;
    color: var(--white);
  }

  .card .card_title__container .card_paragraph {
    margin-top: 0.25rem;
    width: 65%;

    font-size: 0.5rem;
    color: var(--paragraph);
  }

  .card .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);

    border: none;
  }

  .card .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item .check {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;
    background-color: var(--primary);

    border-radius: 50%;
  }

  .card .card__list .card__list_item .check .check_svg {
    width: 0.75rem;
    height: 0.75rem;

    fill: var(--black);
  }

  .card .card__list .card__list_item .list_text {
    font-size: 0.75rem;
    color: var(--white);
  }

  .card .button {
    cursor: pointer;

    padding: 0.5rem;
    width: 100%;
    background-image: linear-gradient(
      0deg,
      rgba(94, 58, 238, 1) 0%,
      rgba(197, 107, 240, 1) 100%
    );

    font-size: 0.75rem;
    color: var(--white);

    border: 0;
    border-radius: 9999px;
    box-shadow: inset 0 -2px 25px -4px var(--white);
  }`;