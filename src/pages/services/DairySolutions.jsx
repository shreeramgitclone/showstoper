import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import '../../styles/pages/ServicesAndSolutionsCommon.css';
import scrum from "../../assets/dairy-product.png";

const features = [
  ["Animal Health Monitoring:Sensors: Wearable devices like smart collars (e.g., Cowlar, Moocall) or ear tags with microchips monitor vital signs such as temperature, heart rate, and activity levels. These detect early signs of disease, heat stress, or abnormal behavior."],
  ["Milk Production and Quality:Automated Milking Systems: Systems like the Lely Astronaut use bio-tags to identify cows, clean teats, and milk autonomously, improving efficiency and hygiene.Milk Tank Monitoring: Sensors in storage tanks track levels, temperature, and quality, preventing spoilage and ensuring compliance with regulations."],
  ["Feed and Nutrition Management:Smart Feeding Systems: IoT-enabled feeders adjust feed based on cow needs, optimizing nutrition and reducing waste. For instance, temperature drops increase feed requirements, and IoT systems notify farmers to adjust rations."],
  ["Location Tracking and Geofencing:GPS Trackers: Devices like LoRaWAN GPS trackers monitor cow locations, preventing theft and ensuring safety. Geofencing alerts farmers if animals leave designated areas."],
  ["Supply Chain and Inventory Management:Cold Chain Monitoring: IoT ensures milk is stored and transported at optimal conditions, reducing wastage."],
  ["Inventory Tracking: Sensors manage stock levels, preventing overstocking or shortages."],
 
];

export default function DairySolutions() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Dairy Solution</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Smart Solutions for Smarter Business
            </p>
          </motion.div>
        </div>
      </section>
      <div style={{ backgroundColor: "#1d3750",borderBottom: "1px solid #2a3243" }}>
        <div style={{ position: "relative", width: "100%", padding: '2rem', height: "50vh" }} className='container mx-auto px-4'>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Dairy Solution</h2>
          <div className="company-vision-divider mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6 left-aligntext'>The Internet of Things (IoT) is transforming dairy farming by enabling smart dairy farming (SDF), which enhances productivity, animal welfare, and operational efficiency through data-driven technologies.</p>
          </p>
          <h2 className="font-semibold text-white text-center text-3xl mb-2">Why Us</h2>
          <div className="company-vision-divider-small mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed text-center mt-6">
            <p className='text-center mb-6 left-aligntext'>Showstoper provides various solutions tailored for the dairy industry, focusing on cloud services, digital transformation, and supply chain optimization.
               These solutions aim to improve efficiency, track products, and streamline operations within the dairy sector.</p>
          </p>
        </div>
      </div>
       <section className="bg-[#1E344A] py-12 px-4 md:px-16">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left: Content Box */}
                <div className="bg-[#2C2C3F] text-white p-6 md:p-10 rounded-xl flex-1 shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Dairy Solution</h2>
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
                    style={{ width: "100%", height: "auto", objectFit: "contain" , border:" 2.5px solid red",}}
                  />
                </div>
              </div>
            </section>
    </Layout>
  )
}
