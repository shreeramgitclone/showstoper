import { motion } from 'framer-motion';
import { FileBarChart, BarChart3, DatabaseZap } from "lucide-react";
import '../../styles/components/home/CompanyVision.css';
import vid from '../../assets/WhatsApp Video 2025-03-22 at 15.58.16_2787df73.mp4';

const CompanyVision = () => {
  return (
    <section id="company-vision" className="company-vision">
      <div className="company-vision-container">
        <h2 className="company-vision-title text-center text-3xl font-bold mb-5">Company Vision</h2>
       

        <div className="company-vision-quote-box max-w-4xl mx-auto text-center px-4">
          <blockquote className="company-vision-quote text-lg text-gray-700 italic">
            " To be the unmatched and most trusted partner for businesses by delivering seamless, scalable, and transformative IT solutions that drive business to growth and success as well as to build a safer digital platform by providing robust, innovative cybersecurity solutions for businesses and individuals and to pioneering future of artificial intelligence and automation by enabling cutting edge technologies with smarter decisions that would foster creativity collaboration and progress."
          </blockquote>
        </div>
        <h2 className="company-vision-title text-center text-3xl font-bold mb-4 mt-15">Our Service</h2>
       
        {/* 3 Circular Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 md:px-20">
          {/* Card 1: Revenue Management System */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
              <FileBarChart className="text-white w-10 h-10" />
            </div>
            <p className="mt-4 text-center font-semibold text-white">Revenue Management System</p>
          </div>

          {/* Card 2: Management Information System */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
              <BarChart3 className="text-white w-10 h-10" />
            </div>
            <p className="mt-4 text-center font-semibold text-white">Management Information System</p>
          </div>

          {/* Card 3: CRM & ERP Solutions */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
              <DatabaseZap className="text-white w-10 h-10" />
            </div>
            <p className="mt-4 text-center font-semibold text-white">CRM & ERP Solutions</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyVision;