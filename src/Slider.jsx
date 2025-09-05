import React, { useState } from "react";


const servicesData = [
  {
    title: "Educational Courses",
    description: "We offer a wide variety of professional courses designed for beginners, intermediates, and advanced learners. Our goal is to help you gain practical knowledge and build strong skills for your future career.",
    img: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg"
  },
  {
    title: "Educational Articles",
    description: "Read hundreds of well-researched educational articles covering various fields such as science, technology, languages, and more. Stay updated with the latest trends and boost your knowledge every day.",
    img: "https://images.pexels.com/photos/6770532/pexels-photo-6770532.jpeg"
  },
  {
    title: "Interactive Workshops",
    description: "Join our interactive workshops where you can practice your skills in real-life scenarios. Work with experts, ask questions, and gain confidence in your chosen field through practical sessions.",
    img: "https://images.pexels.com/photos/3182748/pexels-photo-3182748.jpeg"
  },
  {
    title: "Educational Consultation",
    description: "Our professional consultants guide you in choosing the best educational path based on your interests, goals, and future career opportunities. Make informed decisions with expert advice.",
    img: "https://images.pexels.com/photos/3184660/pexels-photo-3184660.jpeg"
  },
];

function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <div className="services-slider" id ="services">
      <div className="slider-content">
        <img src={servicesData[currentIndex].img} alt={servicesData[currentIndex].title} />
        <h3>{servicesData[currentIndex].title}</h3>
        <p>{servicesData[currentIndex].description}</p>
      </div>

      
      <button className="prev-btn" onClick={prevSlide}>‹</button>
      <button className="next-btn" onClick={nextSlide}>›</button>

     
      <div className="slide-indicators">
        {servicesData.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ServicesSlider;

