import './ContactUs.css'


/**
 * ContactUs component
 * @param {{imageSrc: string; }} props
 */


function ContactUs({ imageSrc }) {

    return (
        <footer className="footer">
            <img className='card-image-profile' src={imageSrc} alt="Luke" />
            <p className="footer-location">📍 Austria, Kapfembearg</p>
            <a className="footer-phone" href="tel:+436607234433">+43 660 7234433</a>
        </footer>
    )
}

export default ContactUs