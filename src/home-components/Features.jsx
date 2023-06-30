import React from 'react'

// Import Assets
import Fast from "../assets/fast.gif";
import Safe from "../assets/safe.gif";
import Fun from "../assets/fun.gif";
import Message from "../assets/messaging.png";
import Report from "../assets/report.png";
import Friends from "../assets/friends.png";

// **Important!**
// Use This Cite To Make Free IPhone Images: https://mockuphone.com/


function Features() {
  return (
    <>
    {/* Tab Sections */}
    <div className="sections">

        {/* Fast Tab */}
        <a href="#section-one" className="section">
          <img className="section-logo" src={Fast} alt="fast"/>
          <div className="section-head-text dealdog-text-color">Fast</div>
          <div className="section-sub-text">
            Everything you want to buy or sell at your fingertips with real-time
            messaging and in-app payments.
          </div>
        </a>

        {/* Safe Tab */}
        <a href="#section-two" id="middle-section" className="section">
          <img className="section-logo" src={Safe} alt="safe"/>
          <div className="section-head-text dealdog-text-color">Safe</div>
          <div className="section-sub-text">
            Make deals with the confidence of knowing that everyone you’re
            talking to is a fellow student.
          </div>
        </a>

        {/* Fun Tab */}
        <a href="#section-three" className="section">
          <img className="section-logo" src={Fun} alt="fun"/>
          <div className="section-head-text dealdog-text-color">Fun</div>
          <div className="section-sub-text">
            Interact with other students through fun chat features and make your
            campus experience unforgettable.
          </div>
        </a>
    </div>

    {/*  Sections */}
    <div className="sections-desc">

      {/* Fast Section */}
      <div id="section-one">
        <img className="section-one-iphone" src={Message} /* TODO: Add Image Here! */alt="fast"/>

        <div className="section-one-text">
          <div className="section-one-head-text dealdog-text-color">
            Real-Time Messaging
          </div>
          <div className="section-one-sub-text">
            Delivering on speed with real-time messaging so that you can
            easily see your unread messages and know when the recipient was
            last active in your conversation. Use our in-app messaging tools
            to transact quick and easy.
          </div>
        </div>
      </div>

      {/* Start Responsive! */}
      <div className="small-section-one-sub-text">
        Delivering on speed with real-time messaging so that you can
        easily see your unread messages and know when the recipient was
        last active in your conversation. Use our in-app messaging tools
        to transact quick and easy.
      </div>
      {/* End Responsive! */}


      {/* Safe Section */}
      <div id="section-two">
        <div className="section-two-text">
          <div className="section-two-head-text dealdog-text-color">
            Your Safety is Our Priority
          </div>
          <div className="section-two-sub-text">
            For your security, all users and transactions are verified with “
            <b>.edu</b>” email authentication to prevent fraud. A full block
            and report system in place. Bye-bye scammers!
          </div>
        </div>

        <img className="section-two-iphone" src={Report} /* TODO: Add Image Here! */alt="safe" />
      </div>

      {/* Start Responsive! */}
      <div className="small-section-two-sub-text">
        For your security, all users and transactions are verified with “
        <b>.edu</b>” email authentication to prevent fraud. A full block
        and report system in place. Bye-bye scammers!
      </div>
      {/* End Responsive! */}
      
      {/* Fun Section */}
      <div id="section-three">
        <img className="section-three-iphone" src={Friends} /* TODO: Add Image Here! */alt="fun" />

        <div className="section-three-text">
          <div className="section-three-head-text dealdog-text-color">
            Connect with Your Campus Community
          </div>
          <div className="section-three-sub-text">
            The ultimate hub for college students to connect and engage in
            seamless buying and selling experiences! With fun chat features
            and quirky dog puns, make fantastic deals while creating new
            friendships all in one place.
          </div>
        </div>
      </div>

      {/* Start Responsive! */}
      <div className="small-section-three-sub-text">
        The ultimate hub for college students to connect and engage in
        seamless buying and selling experiences! With fun chat features
        and quirky dog puns, make fantastic deals while creating new
        friendships all in one place.
      </div>
      {/* End Responsive! */}

    </div>
    </>
  )
}

export default Features