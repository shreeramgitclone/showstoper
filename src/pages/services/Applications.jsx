import React from 'react';
import ServiceTemplate from '../../components/common/ServiceTemplate';

const Applications = () => {
  const pageData = {
    title: "Mobile & Desktop Applications",
    description: "At Showstoper Technologies, we create custom apps that enhance productivity, performance, quality and user experience, whether on the go or at your desk.",
    features: [
      {
        icon: "📱",
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android"
      },
      {
        icon: "💻",
        title: "Desktop Solutions",
        description: "Powerful desktop applications for Windows, macOS and Linux"
      },
      {
        icon: "🔄",
        title: "Cross-Platform",
        description: "Unified applications that work seamlessly across all devices"
      },
      {
        icon: "⚡",
        title: "High Performance",
        description: "Optimized applications for maximum speed and efficiency"
      },
      {
        icon: "🎨",
        title: "User Experience",
        description: "Intuitive interfaces designed for optimal user engagement"
      },
      {
        icon: "🔒",
        title: "Security",
        description: "Built-in security features to protect your data"
      }
    ],
    technologies: [
      { icon: "🔵", name: "Flutter" },
      { icon: "🔷", name: ".NET" },
      { icon: "⚛️", name: "React" },
      { icon: "🎨", name: "UI/UX Design" },
      { icon: "📊", name: "Analytics" },
      { icon: "☁️", name: "Cloud Integration" }
    ],
    benefits: [
      {
        icon: "🚀",
        title: "Faster Time to Market",
        description: "Rapid development and deployment of your applications"
      },
      {
        icon: "💰",
        title: "Cost Effective",
        description: "Optimized development process to reduce costs"
      },
      {
        icon: "🔄",
        title: "Easy Updates",
        description: "Seamless updates and maintenance"
      },
      {
        icon: "📈",
        title: "Scalability",
        description: "Applications that grow with your business"
      }
    ]
  };

  return <ServiceTemplate {...pageData} />;
};

export default Applications; 