import React from 'react';
import ReactDOM from 'react-dom/client';

import './asstes/style.css'

import thar1 from "./asstes/image/thar1.jpg";
import thar2 from "./asstes/image/thar2.jpg";
import thar3 from "./asstes/image/thar3.jpg";
import thar4 from "./asstes/image/thar4.jpg";
import thar5 from "./asstes/image/thar5.jpg";
import thar6 from "./asstes/image/thar6.jpg";
import thar7 from "./asstes/image/thar7.jpg";
import thar8 from "./asstes/image/thar8.jpg";
import thar9 from "./asstes/image/thar9.jpg";
import thar10 from "./asstes/image/thar10.jpg";

function Gallery(){
  return(
    <div className='container'>
      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar1} alt='img'></img>
        </div>
        <h3>Beast Mode</h3>
      </div>

      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar2} alt='img'></img>
        </div>
        <h3>Thar Vibes</h3>
      </div>

      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar3} alt='img'></img>
        </div>
        <h3>Desert King</h3>
      </div>

      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar4} alt='img'></img>
        </div>
        <h3>Off-Road Titan</h3>
      </div>

      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar5} alt='img'></img>
        </div>
        <h3>Thar Trails</h3>
      </div>

      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar6} alt='img'></img>
        </div>
        <h3>Thar's Eye</h3>
      </div>

      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar7} alt='img'></img>
        </div>
        <h3>Rugged Radiance</h3>
      </div>

      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar8} alt='img'></img>
        </div>
        <h3>Mountain Mavericks</h3>
      </div>

      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar9} alt='img'></img>
        </div>
        <h3>Trailblazing </h3>
      </div>

      <div className='image_container'>
        <div className='image_holder'>
          <img src={thar10} alt='img'></img>
        </div>
        <h3>Kalki's Blaze</h3>
      </div>
      
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Gallery></Gallery>
);

