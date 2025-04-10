import { motion } from 'framer-motion';

const NewsCard = ({ image, title, date, category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden mb-4">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full aspect-video object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-[#ed1c24] font-medium">{category}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#ed1c24] transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const LatestNews = () => {
  const news = [
    {
      image: "/news1.jpg",
      title: "Automation",
      // date: "Mar 15, 2024",
      category: "Technology, Healthcare"
    },
    {
      image: "/news2.jpg",
      title: "Testing",
      // date: "Mar 12, 2024",
      category: "Healthcare"
    },
    {
      image: "/news3.jpg",
      title: "AI Solutions",
      // date: "Mar 10, 2024",
      category: "Healthcare"
    },
    {
      image: "/news4.jpg",
      title: "Robotics",
      // date: "Mar 8, 2024",
      category: "Technology"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Services</h2>
          <div className="w-20 h-1 bg-[#ed1c24]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews; 