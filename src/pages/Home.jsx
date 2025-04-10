import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import CompanyProfile from '../components/home/CompanyProfile';
import CompanyVision from '../components/home/CompanyVision';
import ExpertTeam from '../components/home/ExpertTeam';

const Home = () => {
  useEffect(() => {
    const handleSpaceKey = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition < windowHeight * 0.5) {
          // Scroll to Company Profile
          const profileElement = document.getElementById('company-profile');
          if (profileElement) {
            const headerOffset = 80;
            const elementPosition = profileElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } else if (scrollPosition < windowHeight * 1.5) {
          // Scroll to Company Vision
          const visionElement = document.getElementById('company-vision');
          if (visionElement) {
            const headerOffset = 80;
            const elementPosition = visionElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } else if (scrollPosition < windowHeight * 2.5) {
          // Scroll to Expert Team
          const teamElement = document.getElementById('expert-team');
          if (teamElement) {
            const headerOffset = 80;
            const elementPosition = teamElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    window.addEventListener('keydown', handleSpaceKey);
    return () => window.removeEventListener('keydown', handleSpaceKey);
  }, []);

  return (
    <Layout>
      <Hero />
      {/* <Disclaimer /> */}
      <CompanyProfile />
      <CompanyVision />
      <ExpertTeam />
    </Layout>
  );
};

export default Home; 