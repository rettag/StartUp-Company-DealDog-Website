import React from 'react';
import { useState, useEffect } from 'react';

// Import Image Assets
import AboutImage1 from "../assets/about-us1.jpeg";
import AboutImage2 from "../assets/about-us2.png";
import AboutImage3 from "../assets/about-us3.jpg";
// *Import more images here!*


function AboutUs() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([AboutImage1, AboutImage2, AboutImage3]) // Add Images Here!
  }, []);


  return (
    <div className="about">
        <div className="about-title dealdog-text-color">Who We Are</div>
        <div className="about-desc">
          DealDog is a premier campus marketplace <b>made by students for students.</b> But we’re so much more. We
          believe getting what you need should be fast, safe, and fun! We exist
          to connect students who need to buy or sell tickets, goods, subleases,
          and more on their college campus. And we want to do it in the easiest,
          most memorable way possible.
        </div>

        <div id="scroll-images">
            {images.map((image) => (<img className="about-image" src={image} alt="about"/>))}
        </div>
    </div>
  )
}

export default AboutUs;