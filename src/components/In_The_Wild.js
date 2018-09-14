import React from 'react';
import { Slide } from 'react-slideshow-image';

const fadeatmosImages = [
"https://media.graphcms.com//jcnHugirSeGSCwnSrkPi",
"https://media.graphcms.com//hdghRhIlRh2PCmpO8oMB",
"https://media.graphcms.com//bkaFyG6fRUymdWYJ3N6R",
"https://media.graphcms.com//6V7wprXWSYalNhDmj2Ru",
"https://media.graphcms.com//2a7oniHtTk6IZkuRSt3w",
"https://media.graphcms.com//EkdpA2vSK26yqCjjI2iW",
"https://media.graphcms.com//8RxB19LTjGZunrM1Ue7l",
"https://media.graphcms.com//gxOgUQTuTIuC8tyPnSNw",
"https://media.graphcms.com//plR1GEWcQrGuyqf0fm6b",
"https://media.graphcms.com//p47rHSzJSmOByfxq8IVA",
"https://media.graphcms.com//BljIof1dTLWAObLbPzWT",
"https://media.graphcms.com//cGYGzyO1SNmmRvir0QNg",
"https://media.graphcms.com//fH0CYKhTFuNxj6C1mPSt",
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

const In_The_Wild = () => {
  return (
      <div>
    <Slide {...fadeProperties} className='itw_slide_show'>
      <div className="itw_each_fade">
        <div className="itw_image_container">
          <img src={fadeatmosImages[0]} className='itw_slide_image' />
        </div>
      </div>
      <div className="itw_each_fade">
        <div className="itw_image_container">
          <img src={fadeatmosImages[1]} className='itw_slide_image'/>
        </div>
      </div>
      <div className="itw_each_fade">
      <div className="itw_image_container">
        <img src={fadeatmosImages[2]} className='itw_slide_image'/>
      </div>
    </div>
    <div className="itw_each_fade">
    <div className="itw_image_container">
      <img src={fadeatmosImages[3]} className='itw_slide_image'/>
    </div>
  </div>
  <div className="itw_each_fade">
  <div className="itw_image_container">
    <img src={fadeatmosImages[4]} className='itw_slide_image'/>
  </div>
</div>    
<div className="itw_each_fade">
<div className="itw_image_container">
  <img src={fadeatmosImages[5]} className='itw_slide_image'/>
</div>
</div>   
<div className="itw_each_fade">
<div className="itw_image_container">
  <img src={fadeatmosImages[6]} className='itw_slide_image'/>
</div>
</div>   
 <div className="itw_each_fade">
<div className="itw_image_container">
  <img src={fadeatmosImages[7]} className='itw_slide_image'/>
</div>
</div>    
<div className="itw_each_fade">
<div className="itw_image_container">
  <img src={fadeatmosImages[8]} className='itw_slide_image'/>
</div>
</div>    
<div className="itw_each_fade">
<div className="itw_image_container">
  <img src={fadeatmosImages[9]} className='itw_slide_image'/>
</div>
</div>
<div className="itw_each_fade">
<div className="itw_image_container">
  <img src={fadeatmosImages[10]} className='itw_slide_image'/>
</div>
</div>
<div className="itw_each_fade">
<div className="itw_image_container">
  <img src={fadeatmosImages[11]} className='itw_slide_image'/>
</div>
</div>
<div className="itw_each_fade">
<div className="itw_image_container">
  <img src={fadeatmosImages[12]} className='itw_slide_image'/>
</div>
</div>

      </Slide>
      </div>
  )
}
 export default In_The_Wild;