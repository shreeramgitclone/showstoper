import { motion } from 'framer-motion';

const AwardCard = ({ title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-purple-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Awards = () => {
  const awards = [
    {
      title: "Forbes Digital Leader",
      description: "Recognized among top 100 companies leading digital transformation globally"
    },
    {
      title: "Sustainability Champion",
      description: "Awarded for exceptional environmental stewardship and sustainable practices"
    },
    {
      title: "Best Employer 2024",
      description: "Recognized for outstanding workplace culture and employee satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Awards and Recognition</h2>
          <p className="text-lg text-gray-300">Excellence recognized across the globe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 