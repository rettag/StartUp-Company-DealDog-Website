import React from 'react'

// Import Assets
import Logo from "../assets/logo.png";
import AppleStore from "../assets/apple-store.png";


function CompanyInfo() {
  return (
    <>
    {/* Horizontial DealDog Colored Line */}
    <hr className="horizontial-line"></hr>

    {/* Comapny Infomation */}
    <div className="info">
      {/* Left Side Information */}
      <div className="info-left">
        <img className="info-logo" src={Logo} alt="logo"/>

        <div className="info-company-name dealdog-text-color">
          DealDog App
        </div>

        <div className="info-text">
          DealDog: Campus Marketplace Mobile App
        </div>

        <div className="info-text">
          © 2021 DealDog LLC. All rights reserved.
        </div>

        <div className="info-apps">
          <a href="https://apps.apple.com/us/app/dealdog/id1641987855" /* TODO: Add Link Here! */ className="info-app">
            <img src={AppleStore} alt="apple-store"/>
          </a>
        </div>
      </div>

      {/* Right Side Information */}
      <div className="info-right">

        {/* DealDog Info */}
        <div className="column-one">
          <div className="info-right-title dealdog-text-color">
            DealDog
          </div>
          <div className="info-sub-text">
            <a href="/#" /* TODO: Add Link Here! */ >About us</a>
          </div>
          <div className="info-sub-text">
            <a href="/#" /* TODO: Add Link Here! */ >Contact</a>
          </div>
          <div className="info-sub-text">
            <a href="/#" /* TODO: Add Link Here! */ >Careers</a>
          </div>
        </div>

        {/* Legal Info */}
        <div className="column-two middle-info">
          <div className="info-right-title dealdog-text-color">Legal</div>
          <div className="info-sub-text">
            <a href="https://docs.google.com/document/d/1-IY5cwpzjvaNQYh4hhlCs7CwVHYrAKGMp5KzKngacBE/edit" /* TODO: Add Link Here! */ >Privacy Policy</a>
          </div>
          <div className="info-sub-text">
            <a href="https://docs.google.com/document/d/1wsd4F5cdvPdkLIt6F8ptB4qUh2zkcFX5xNxUlcQZJz8/edit" /* TODO: Add Link Here! */ >Terms and Conditions</a>
          </div>
        </div>

        {/* Socials Info */}
        <div className="column-three">
          <div className="info-right-title dealdog-text-color">
            Socials
          </div>
          <div className="info-sub-text">
            <a href="https://www.instagram.com/dealdogapp/" /* TODO: Add Link Here! */ >Instagram</a>
          </div>
          <div className="info-sub-text">
            <a href="https://www.tiktok.com/@dealdogapp" /* TODO: Add Link Here! */ >Tiktok</a>
          </div>
          <div className="info-sub-text">
            <a href="https://www.linkedin.com/company/dealdog" /* TODO: Add Link Here! */ >LinkedIn</a>
          </div>
        </div>
      </div>
      
      {/* Start Responsive! */}
      <div className="small-info">
        <img className="info-logo" src={Logo} alt="logo"/>

        <div className="info-company-name dealdog-text-color">
          DealDog App
        </div>

        <div className="info-text">
          © 2021 DealDog LLC. All rights reserved.
        </div>

        <div className="info-apps">
          <a href="https://apps.apple.com/us/app/dealdog/id1641987855" /* TODO: Add Link Here! */ className="info-app">
            <img src={AppleStore} alt="apple-store"/>
          </a>
        </div>
      </div>
      {/* End Responsive! */}
    </div>
    </>
  )
}

export default CompanyInfo