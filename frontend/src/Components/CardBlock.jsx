import React from 'react';
import './CardBlock.css';

/**
 * CardBlock component
 * @param {{ title: string; imageSrc: string; paragraph: string; }} props
 */
export default function CardBlock({ title, imageSrc, paragraph }) {
  return (
    <section className="cardBlockContainer">
      <div className="card-image-container">
        <img className="card-image" src={imageSrc} alt={title} />
        <div className="card-image-overlay" />
      </div>
      <p className="card-title">{title}</p>
      <p className="card-paragraph">{paragraph}</p>
    </section>
  );
}