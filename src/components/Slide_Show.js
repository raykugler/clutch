import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  'https://media.graphcms.com//jcnHugirSeGSCwnSrkPi',
  'https://media.graphcms.com//hdghRhIlRh2PCmpO8oMB',
  'https://media.graphcms.com//bkaFyG6fRUymdWYJ3N6R',
  'https://media.graphcms.com//6V7wprXWSYalNhDmj2Ru',

];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

const Slideshow = () => {
  return (
    <Fade {...fadeProperties} className='slide_show'>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} className='slide_image' />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} className='slide_image'/>
        </div>
      </div>
      <div className="each-fade">
      <div className="image-container">
        <img src={fadeImages[2]} className='slide_image'/>
      </div>
    </div>
    <div className="each-fade">
    <div className="image-container">
      <img src={fadeImages[3]} className='slide_image'/>
    </div>
  </div>
  


      </Fade>
  )
}
 export default Slideshow;