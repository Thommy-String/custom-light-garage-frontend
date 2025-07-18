
import './App.css'
import CardBlock from './Components/CardBlock.jsx'
import LukasImage from '../Luke-images/Lukas-working-closeShot.jpeg';
import CLGlogo from '../Luke-images/clg-logo.jpg'
import CeilingVideo from '../Videos/Mercedes-Benz-LEDs.mp4'
import VideoBlock from './Components/VideoBlock.jsx';
import f10Cieling from '../Luke-images/f10Ceiling.jpg';
import ambientLight from '../Luke-images/ambient-light-f10.jpg'
import starlightm5 from '../Luke-images/starlight-m5.jpg'
import f36cieling from '../Luke-images/f36-cieling.jpg';
import LukeProfilePic from '../Luke-images/ProfileLuke.jpg';
import LatestProjectsCarousel from './Components/LatestProjectsCarousel.jsx';
import ContactUs from './Components/ContactUs.jsx';
import ServiceSectionCard from './Components/ServiceSectionCard.jsx';
import GetQuote from './Components/GetQuote.jsx';


<CardBlock
  title="Elegant. Luxurious."
  imageSrc={LukasImage}
/>

const carouselItems = [
  {
    mediaType: 'image',
    mediaSrc: f10Cieling,
    caption: 'BMW M5 starlight',
  },
  {
    mediaType: 'video',
    mediaSrc: CeilingVideo,
    caption: 'MERCEDES CLS starlight',
  },
  {
    mediaType: 'image',
    mediaSrc: starlightm5,
    caption: 'BMW M5 starlight',
  },
  {
    mediaType: 'image',
    mediaSrc: f36cieling,
    caption: 'BMW F36 starlight',
  },


];

function App() {
  return (
    <>
      <main>
        <VideoBlock
          title="Ambient Light"
          videoSrc={CeilingVideo}
          paragraph={<>Tailored illumination. Exclusive, <span className='pure-white'>high-end ambiance</span> for high-end cars.</>}
        />

        <CardBlock
          title="Hand-installed. One by one."
          imageSrc={LukasImage}
          paragraph={
            <>
              Every high-efficiency <span className="pure-white">LED</span> is meticulously hand-placed beneath your headliner by our expert technicians, ensuring <span className="pure-white">perfect alignment</span>, seamless integration, and true artisanal quality.
            </>
          }
        />

        <LatestProjectsCarousel items={carouselItems} />

        <ServiceSectionCard title="Starlight" price="€1500" description='Starlight LED installation service, meticulously places over 1100 high-efficiency LEDs by hand. Each light creates a custom constellation, offering unparalleled luxury and an exquisite interior ambiance. ' imageSrc='https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/starlight-headlining/component-assets/accessories-product-starlight-headliner-carousel-wraith-headliner.jpg' logoSrc={CLGlogo}></ServiceSectionCard>
        <ServiceSectionCard title="Ambient Light" price="€680" description='Elevate your interior with  custom LED ambient lighting. We use latest-generation LEDs to create a unique and sophisticated cabin atmosphere. Choose from a vast spectrum of colors and intensities to perfectly match your style.' imageSrc={ambientLight} logoSrc={CLGlogo}></ServiceSectionCard>

          <GetQuote></GetQuote>
      </main>

      <footer>
        <ContactUs imageSrc={LukeProfilePic}></ContactUs>
      </footer>

    </>
  )
}

export default App
