import './Background.css'
import { useState, useEffect } from 'react';
import { destinations } from '../data/destinations'

const Background = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = destinations[currentIndex].image;
  const currentCaption = destinations[currentIndex].caption;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-wrapper"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <p
        className="background-caption"
        dangerouslySetInnerHTML={{ __html: currentCaption }}
      ></p>
    </div>
  )
}
export default Background