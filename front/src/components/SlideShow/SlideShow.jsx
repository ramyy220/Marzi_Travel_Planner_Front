import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
        key={index}
        src={image.src}
        alt={`Slide ${index + 1}`}
        style={{ display: index === currentIndex ? 'block' : 'none' }}
      />
      ))}
    </div>
  );
};

export default Slideshow;