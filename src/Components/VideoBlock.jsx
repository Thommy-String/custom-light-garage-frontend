// VideoBlock.jsx
import React from 'react';
import './VideoBlock.css';

/**
 * VideoBlock component
 * @param {{ title: string; videoSrc: string; paragraph: string }} props
 */
export default function VideoBlock({ title, videoSrc, paragraph }) {
  return (
    <section className="videoBlockContainer">
      <div className="video-container">
        <video
          className="video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="video-overlay" />
      </div>
      <p className="video-title">{title}</p>
      <p className="video-paragraph">{paragraph}</p>
    </section>
  );
}