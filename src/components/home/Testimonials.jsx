import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Working with this team has transformed our business operations completely. Their innovative solutions have helped us achieve unprecedented growth.",
      author: "Sarah Johnson",
      position: " TechCorp"
    },
    {
      text: "The level of expertise and professionalism shown by the team is exceptional. They've been instrumental in our digital transformation journey.",
      author: "Michael Chen",
      position: " InnovateX"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Testimonials</h2>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl text-purple-600 opacity-20 mb-4">"</div>
              <blockquote className="text-xl text-gray-700 mb-6">
                {testimonials[currentIndex].text}
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-purple-600 text-white"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-purple-600 text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 