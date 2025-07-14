import './LatestProjectsCarousel.css'
import React, { useRef } from 'react';

function LatestProjectsCarousel({ items }) {
  // items = array di oggetti { mediaSrc, mediaType: 'image'|'video', caption }
  const containerRef = useRef(null);

  const scrollNext = () => {
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollBy({ left: width * 0.8, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollBy({ left: -width * 0.8, behavior: 'smooth' });
  };

  return (
    
    <div className="carousel-wrapper">
        <p className='title'>Latest Projects</p>
      <div className="carousel-container" ref={containerRef}>
        {items.map((item, i) => (
          <div className="carousel-item" key={i}>
            {item.mediaType === 'video' ? (
              <video src={item.mediaSrc} autoPlay muted loop playsInline />
            ) : (
              <img src={item.mediaSrc} alt={item.caption} />
            )}
            <p className="carousel-caption">{item.caption}</p>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button onClick={scrollPrev} className="carousel-btn prev">{'‹'}</button>
        <button onClick={scrollNext} className="carousel-btn next">{'›'}</button>
      </div>
    </div>
  );
}

export default LatestProjectsCarousel