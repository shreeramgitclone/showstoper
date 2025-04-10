import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CompanyProfileImage from "../../assets/CompanyProfile.jpg";
import '../../styles/components/home/CompanyProfile.css';

const CompanyProfile = () => {

  const scrollToVision = () => {
    const element = document.getElementById('company-vision');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleSpaceKey = (e) => {
      if (e.code === 'Space' && window.scrollY >= window.innerHeight && window.scrollY < window.innerHeight * 2) {
        e.preventDefault();
        scrollToVision();
      }
    };

    window.addEventListener('keydown', handleSpaceKey);
    return () => window.removeEventListener('keydown', handleSpaceKey);
  }, []);

  return (
    <section id="company-profile" className="company-profile">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-6xl font-bold mb-5 text-white">Company Profile</h2>
            {/* <div className="company-vision-divider mb-6"></div> */}
          </motion.div>

          <div className="grid gap-4 items-center text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold text-White">Who We Are</h3>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                At Showstoper Technologies and Media Pvt. Ltd. , we’re more than a software company—we’re innovators, problem-solvers, and partners in your digital journey. Since our founding in 2020, we’ve been driven by a singular vision: to empower businesses with transformative technology that unlocks growth, efficiency, and endless possibilities.
                We’re a diverse collective of engineers, designers, strategists, and visionaries united by a shared goal: to build software that matters. With decades of combined experience and a culture of continuous learning, we thrive on solving the toughest challenges—and have fun doing it.
              </p>

            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="stats-card">
                  <h4 className="text-3xl font-bold text-[#ed1c24] mb-2">5+</h4>
                  <p className="text-gray-600">Years Excellence</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-3xl font-bold text-[#ed1c24] mb-2">100+</h4>
                  <p className="text-gray-600">Projects Delivered</p>
                </div>
              </div>



            </motion.div> */}

          </div>
          <div className='OurApproach'>
            <h3 className="text-2xl font-semibold text-white py-8">Our Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="icon-container">
                    <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Innovation First</h4>
                    <p className="text-gray-300">We prioritize innovative solutions that drive real business value</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="icon-container">
                    <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Client Partnership</h4>
                    <p className="text-gray-300">We build lasting partnerships through collaboration and trust</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="icon-container">
                    <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Quality Assured</h4>
                    <p className="text-gray-300">We maintain the highest standards in all our deliverables</p>
                  </div>
                </div>
              </div>


              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="icon-container">
                    <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Innovation First</h4>
                    <p className="text-gray-300">We prioritize innovative solutions that drive real business value</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="icon-container">
                    <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Client Partnership</h4>
                    <p className="text-gray-300">We build lasting partnerships through collaboration and trust</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="icon-container">
                    <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Quality Assured</h4>
                    <p className="text-gray-300">We maintain the highest standards in all our deliverables</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyProfile; 