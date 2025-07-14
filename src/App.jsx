import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero.jsx'
import CardBlock from './Components/CardBlock.jsx'
import LukasImage from '../Luke-images/Lukas-working-closeShot.jpeg';
import CeilingVideo from '../Videos/Mercedes-Benz-LEDs.mp4'
import VideoBlock from './Components/VideoBlock.jsx';
import f10Cieling from '../Luke-images/f10Ceiling.jpg'
import f36cieling from '../Luke-images/f36-cieling.jpg';
import LukeProfilePic from '../Luke-images/ProfileLuke.jpg';
import LatestProjectsCarousel from './Components/LatestProjectsCarousel.jsx';
import ContactUs from './Components/ContactUs.jsx';


<CardBlock
  title="Elegant. Luxurious."
  imageSrc={LukasImage}
/>

const carouselItems = [
  {
    mediaType: 'image',
    mediaSrc: f10Cieling,
    caption: 'Stars on BMW M5',
  },
  {
    mediaType: 'video',
    mediaSrc: CeilingVideo,
    caption: 'Stars on BMW M6',
  },
  {
    mediaType: 'image',
    mediaSrc: f36cieling,
    caption: 'BMW F36',
  },

];

function App() {


  return (
    <>

      <main>
        

        <VideoBlock
          title="Custom Ambient Light"
          videoSrc={CeilingVideo}
          paragraph={<>Tailored illumination. Exclusive, <span className='pure-white'>high-end ambiance</span> for high-end cars.</>}
        />

        <CardBlock
          title="Hand-installed. One by one."
          imageSrc={LukasImage}
          paragraph={
            <>
              Every high-efficiency <span className="pure-white">LED strip</span> is meticulously hand-placed beneath your headliner by our expert technicians, ensuring <span className="pure-white">perfect alignment</span>, seamless integration, and true artisanal quality.
            </>
          }
        />

        <LatestProjectsCarousel items={carouselItems} />
      </main>

      <footer>
        <ContactUs imageSrc={LukeProfilePic}></ContactUs>
      </footer>

    </>
  )
}

export default App
