import { useEffect, useState } from 'react';
import React from 'react'

// Import Assets
import AppleStore from "../assets/apple-store.png";
import Yoda from "../assets/yoda.gif";
import DogButton from "../assets/dog-button.png";


function Download() {
  const [showDog, setShowDog] = useState(false);

  useEffect(() => {
    setShowDog(false);
  }, []);

  // Handling Dog Button
  const HandleDogClick = (event) => {
    event.preventDefault();
    if (showDog === false) setShowDog(true);
    if (showDog === true) setShowDog(false);
  }

  return (
    <div className="ready">
        {/* Title */}
        <div className="ready-title dealdog-text-color">
          Ready to sniff out a deal?
        </div>

        {/* Sub-Title */}
        <div className="ready-desc">
          Download the app for free today, available on the AppStore and the
          Play Store.
        </div>

        {/* Apps To Download */}
        <div className="ready-apps">
          <a href="https://apps.apple.com/us/app/dealdog/id1641987855" className="ready-app ready-apple">
            <img src={AppleStore} alt="apple-store"/>
          </a>
          <a href="/#" className="ready-app">
            <button onClick={HandleDogClick}>
              <img src={DogButton} alt="gift" />
            </button>
          </a>
        </div>

        {/* Shows The Meme */}
        {showDog ? (
        <div className="gift"><img src={Yoda} alt="yoda"/></div> // If showDog = true
        ) : (
        <div className="gift"></div> // If showDog = false
        )}
    </div>
  )
}

export default Download