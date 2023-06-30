import React from 'react'

// Import Assets
import Logo from "../assets/logo.png";
import IPhone from "../assets/iphone.png";
import AppleStore from "../assets/apple-store.png";

// **Important!**
// Use This Cite To Make Free IPhone Images: https://mockuphone.com/

function Landing() {
  return (
      <div className="landing-screen">

        { /* Landing Banner */ }
        <div className="landing-banner">

          <div className="name-and-logo">
            <img src={Logo} alt="logo" />
            <div>DealDog</div>
          </div>

          <a href="/#" /* TODO: Add Link Here! */ className="careers">Careers</a>
        </div>

        {/* Landing Content */}
        <div className="landing-content">
          <div className="landing-text">

            <div className="head-text dealdog-text-color">
              Your Exclusive Campus Marketplace
            </div>

            {/* Start Responsive! */}
            <img className="small-landing-iphone" src={IPhone} alt="iphone" />
            { /* End Responsive! */}

            <div className="sub-text">
              Whether you’re looking for new clothing, need to sublease your
              place for the summer, or simply want to go to a game with your
              friends – our platform has everything you want to buy or sell on
              campus.
            </div>

            <div className="landing-download-apps">
              <a href="https://apps.apple.com/us/app/dealdog/id1641987855" /* TODO: Add Link Here! */className="landing-ios-app">
                <img src={AppleStore} alt="apple-store"/>
              </a>
              {/* Add Other Apps To Download Here! */}
            </div>
          </div>

          <img className="landing-iphone" src={IPhone} alt="iphone" />
        </div>
      </div>
  )
}

export default Landing;