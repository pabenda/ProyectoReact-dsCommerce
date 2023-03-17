import React, { useState, useEffect } from 'react';
import "../main.css";

const Welcome = () => {
  const [currentImage, setCurrentImage] = useState('./src/assets/imagenWelcome.jpg');
  const imageList = ['./src/assets/imagenWelcome.jpg', './src/assets/imagen2.jpg', './src/assets/imagen3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const changeImage = () => {
    const currentIndex = imageList.indexOf(currentImage);
    if (currentIndex === imageList.length - 1) {
      setCurrentImage(imageList[0]);
    } else {
      setCurrentImage(imageList[currentIndex + 1]);
    }
  };

  return (
    <div className="imagenWelcome">
      <img src={currentImage} alt="impresion3d" className='imgWelc'/>
    </div>
  );
};

export default Welcome;
