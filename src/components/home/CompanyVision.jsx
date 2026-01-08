import { motion } from 'framer-motion';
import { FileBarChart, BarChart3, DatabaseZap } from "lucide-react";
import '../../styles/components/home/CompanyVision.css';
import vid from '../../assets/WhatsApp Video 2025-03-22 at 15.58.16_2787df73.mp4';
import cityscape from "../../assets/undraw_services_dhxj.svg";
import grapsvg from "../../assets/undraw_visual-data_3ghp.svg";
const logos = [
    { name: "Optimizely", src: "src/assets/Black And White King Logo.png" },
    { name: "draftbit", src: "src/assets/Black And White King Logo.png" },
    { name: "mparticle", src: "src/assets/Black And White King Logo.png" },
    { name: "loom", src: "src/assets/Black And White King Logo.png" },
    { name: "pe", src: "src/assets/Black And White King Logo.png" },
  ];

const CompanyVision = () => {
  return (
    <section id="company-vision" className="company-vision">
      <div className="company-vision-container">
        <h2 className="company-vision-title text-center text-3xl font-bold mb-5">Company Vision & Mission</h2>
        <div className="bg-[#1d3750] text-white p-6 md:p-12 flex flex-col md:flex-row justify-between gap-10">
          {/* Vision Section */}
          <div className="flex-1 border-b-4 md:border-b-0 md:border-r-2 border-gray-400 pr-0 md:pr-8 justify">
            <h2 className="text-xl font-semibold mb-2 text-[#AEDFF7] vmfont">Vision</h2>
            <p className="mb-4">
              Delivering excellence across multiple domains like BFSI, HEALTHCARE, AIRLINES AND INFRA MANAGEMENT
            </p>
            <div className="flex items-start gap-2 mb-4">
              <span className="text-xl text-[#AEDFF7]">★</span>
              <p>
                <strong>Showstopper Technologies</strong> is committed to being a reliable and trusted partner through rigorous high-standards information security and compliance.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl text-[#AEDFF7]">★</span>
              <p>
                Our scalable, end-to-end CRM, RCM, ERP solutions and IOTs expertise help meet your financial goals, increase productivity, and above all enhance customer satisfaction.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex-1 md:pl-8 justify">
            <h2 className="text-xl font-semibold mb-2 text-[#AEDFF7] vmfont">Mission</h2>
            <p className="mb-4">
              To empower businesses with innovative technology solutions that drive growth, efficiency and competitive advantage in the digital age.
            </p>
            <div className="flex items-start gap-2 mb-4 justify">
              <span className="text-xl text-[#AEDFF7]">★</span>
              <p>
                <strong>Innovation First:</strong> We push boundaries, experiment fearlessly, and embrace change as a catalyst for progress.
              </p>
            </div>
            <div className="flex items-start gap-2 justify">
              <span className="text-xl text-[#AEDFF7]">★</span>
              <p>
                <strong>Client-Centricity:</strong> Your success is our success. We listen deeply, collaborate closely, and deliver solutions tailored to your unique needs.
              </p>
            </div>
          </div>
        </div>

        <h2 className="company-vision-title text-center text-3xl font-bold mb-4 mt-15 ">Our Service</h2>
        <div className="bg-[#1d3750] text-white p-6 md:p-12 flex flex-col md:flex-row gap-10">
          {/* Left section */}
          <div className="flex-[1.5] space-y-8">
            {/* Revenue Management System */}
            <div>
              <h3 className="text-xl font-semibold text-[#AEDFF7] flex items-center gap-2 Revenuet">
                <span>
                  <div className="w-14 h-14 rounded-full  flex items-center justify-center shadow-lg">
                    <FileBarChart className="text-white w-10 h-10" />
                  </div>
                </span>{" "}
                Revenue Management System
              </h3>
              <p className="mt-2 justify">
                A powerful tool, especially for businesses in industries like hospitality, travel, retail, or any sector with dynamic pricing and inventory needs. It leverages data analytics, forecasting, and optimization to maximize revenue.
              </p>
            </div>

            {/* Management Information System */}
            <div>
              <h3 className="text-xl font-semibold text-[#AEDFF7] flex items-center gap-2 Revenuet">
                <span>
                  <div className="w-14 h-14 rounded-full  flex items-center justify-center shadow-lg">
                    <BarChart3 className="text-white w-10 h-10" />
                  </div>
                </span>{" "}
                Management Information System
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1 justify">
                <li>Consolidates data from multiple sources (e.g., CRM, financial tools, coding platforms) into one system.</li>
                <li>Automates routine tasks like payroll, inventory tracking, or client invoicing.</li>
                <li>Tracks resource allocation (e.g., developer hours, server usage).</li>
              </ul>
            </div>

            {/* CRM & ERP Solutions */}
            <div>
              <h3 className="text-xl font-semibold text-[#AEDFF7] flex items-center gap-2 Revenuet">
                <span>
                  <div className="w-14 h-14 rounded-full  flex items-center justify-center shadow-lg">
                    <DatabaseZap className="text-white w-10 h-10" />
                  </div>
                </span>{" "}
                CRM & ERP Solutions
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1 justify">
                <li>
                  CRM tracks leads, monitors sales pipelines, and identifies upsell or cross-sell opportunities. Sales teams can prioritize high-potential clients, increasing conversion rates and revenue.
                </li>
                <li>
                  ERP solutions include tools to track and manage compliance with industry standards and regulations, reducing the risk of penalties or legal issues. By linking customer data with inventory and production, ERP helps ensure timely deliveries and accurate order fulfillment, improving client satisfaction.
                </li>
              </ul>
            </div>
          </div>

          {/* Right section */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <img
              src={cityscape}
              alt="cityscape"

            />
          </div>
        </div>

        <h2 className="company-vision-title text-center text-3xl font-bold mb-4 mt-15 ">Company Overview</h2>
        <div className="bg-[#1d3750] text-white p-6 md:p-12 flex flex-col md:flex-row gap-10">
          {/* Left section */}
          <div className="flex-1 flex flex-co justify-center items-start">

            <img
              src={grapsvg}
              alt="grapsvg"

            />
            {/* Revenue Management System */}

          </div>

          {/* Right section */}
          <div className=" flex-[1] space-y-8 l ">
            <div>
              <h3 className="text-xl font-semibold text-[#AEDFF7] flex items-center gap-2 Revenuet">
                <span>
                  <div className="w-14 h-14 rounded-full  flex items-center justify-center shadow-lg">
                    <span className="text-xl text-[#AEDFF7]">★</span>
                  </div>
                </span>{" "}
                Product-Based
              </h3>
              <p className="mt-2 justify"> Selling software and IOTs Solutions
              </p>
            </div>

            {/* Management Information System */}
            <div>
              <h3 className="text-xl font-semibold text-[#AEDFF7] flex items-center gap-2 Revenuet">
                <span>
                  <div className="w-14 h-14 rounded-full  flex items-center justify-center shadow-lg">
                    <span className="text-xl text-[#AEDFF7]">★</span>
                  </div>
                </span>{" "}
                Service-Based
              </h3>
              <p className="mt-2 justify">  Offering ongoing support & Maintenance
              </p>
            </div>

            {/* CRM & ERP Solutions */}
            <div>
              <h3 className="text-xl font-semibold text-[#AEDFF7] flex items-center gap-2 Revenuet">
                <span>
                  <div className="w-14 h-14 rounded-full  flex items-center justify-center shadow-lg">
                    <span className="text-xl text-[#AEDFF7]">★</span>
                  </div>
                </span>{" "}
                Subscription-Based
              </h3>
              <p className="mt-2 justify">  Providing software-as-a-service (SaaS) like
                cloud platforms (e.g., Salesforce, AWS).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#AEDFF7] flex items-center gap-2 Revenuet">
                <span>
                  <div className="w-14 h-14 rounded-full  flex items-center justify-center shadow-lg">
                    <span className="text-xl text-[#AEDFF7]">★</span>
                  </div>
                </span>{" "}
                Training & Outsourcing
              </h3>
              <p className="mt-2 justify">   Invest in in-house engineers for strategic,
                high-value work (e.g., developing
                proprietary software)
              </p>
            </div>
          </div>
        </div>
        {/* 3 Circular Cards Section */}
<br /><br /><br /><br />
        <div className="w-full bg-ed1c24 pt-10">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-center text-3xl font-semibold text-[black] ">
              Trusted by leaders in the industry
            </h1>

            <div className=" flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {logos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-40 w-auto"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>




      </div>

    </section>
  );
};

export default CompanyVision;