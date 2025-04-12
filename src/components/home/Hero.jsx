import { useEffect, useState } from 'react';
import '../../styles/components/home/Hero.css';
import image from "../../assets/lady.jpeg"; 

const Hero = () => {
  const words = ["empowers", "inspires", "transforms", "builds", "elevates"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const images = [
    "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
    "https://images.pexels.com/photos/3862149/pexels-photo-3862149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2823936/pexels-photo-2823936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsFlipping(false);
      }, 300);
    }, 2000);
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Image changes every 4 seconds

    return () => {
      clearInterval(interval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section className="hero-section">
    <div className="hero-content">
      <div className="hero-line"><span>Code that </span>
         {' '}
        <span className="glass-box">
          <span className={`flip-word ${isFlipping ? 'flip' : ''}`}>
            {words[currentWordIndex]}
          </span>
        </span>
      </div>
      <div className='Innovation'>Innovation that scales</div>
      <span className="sipmlifying">
      Simplifying<span className='sipmlifyingred'> Complexity</span>, Delivering <span className='sipmlifyingred'>Innovation</span>
      </span>
    </div>
  </section>
  
  );
};

export default Hero;
