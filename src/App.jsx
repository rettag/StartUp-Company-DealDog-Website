import React from "react";
import "./App.css";

// Import Components
import Landing from "./home-components/Landing";
import SchoolBanner from "./home-components/SchoolBanner";
import Features from "./home-components/Features";
import Testimonials from "./home-components/Testimonials";
import AboutUs from "./home-components/AboutUs";
import ContactUs from "./home-components/ContactUs";
import CompanyInfo from "./home-components/CompanyInfo";
import Download from "./home-components/Download";


function App() {
  return (
    <>
      <Landing />
      <SchoolBanner />
      <Features />
      <Testimonials />
      <AboutUs />
      <Download />
      <ContactUs />
      <CompanyInfo />
    </>
  );
}

export default App;
