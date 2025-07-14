import './Hero.css';

/**
 * Hero component
 * @param {{ title: string; imageSrc: string; altText?: string; }} props
 */
export default function Hero({ title, imageSrc, altText = '' }) {
  return (
    <section className="hero">
      {/* Background image */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={altText}
      />

      {/* Overlay for better text contrast */}
      <div className="hero-overlay" />

      {/* Centered title */}
      <h1 className="hero-title">
        {title}
      </h1>
    </section>
  );
}