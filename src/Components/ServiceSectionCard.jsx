import './ServiceCardSection.css'

export default function ServiceSectionCard({ title, price, description, imageSrc, logoSrc}) {

    return(
        
            <div className="service-card-container">
                <div className="service-card-bg-image-container">
                    <img className='service-card-bg-image' src={imageSrc} alt={title} />
                    <div className="card-image-overlay" />
                </div>
                
                <img className='service-card-logo' src={logoSrc} alt="" />
                <p className="service-card-price">{price}</p>
                <p className="service-card-title">{title}</p>
                <p className="service-card-description">{description}</p>
                <button className='service-card-cta-button'>Get a quote</button>
            </div>
    )
}