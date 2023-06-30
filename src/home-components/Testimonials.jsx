import React from 'react'

// Import Assets
import ReviewDog1 from "../assets/review1.png";
import ReviewDog2 from "../assets/review2.png";
import ReviewDog3 from "../assets/review3.png";


function Testimonials() {
  return (
    <div className="users">
      {/* Title */}
      <div className="title-user-section">
        Not convinced?
      </div>

      {/* Sub -Title */}
      <div className="sub-title-user-section">
        Here’s what current students are saying about DealDog…
      </div>

      {/* Testimonials */}
      <div className="user-sections">
        {/* User One */}
        <div className="user-section left-quote">
          <img className="section-logo" src={ReviewDog1} alt="review-dog"/>
          <div className="section-head-quote">
            “Easily the best student marketplace”
          </div>
          <div className="user-section-sub-text">
            No other app makes it so easy and safe to buy and sell tickets and
            furniture at UMich. I wish I had this for all of my four years!!!
          </div>
          <div className="username bold">- Stfghhffccgf</div>
        </div>

        {/* User Two */}
        <div className="user-section middle-quote">
        <img className="section-logo" src={ReviewDog2} alt="review-dog"/>
          <div className="section-head-quote">
            “So easy to use!! No bots!”
          </div>
          <div className="user-section-sub-text">
            It’s so nice to just sell to verified students and not a bunch of
            bots and scammers. The app has such an intuitive interface and
            it’s so easy to buy/sell.
          </div>
          <div className="username bold">- patrickp47833</div>
        </div>

        {/* User Three */}
        <div className="user-section right-quote">
          <img className="section-logo" src={ReviewDog3} alt="review-dog"/>
          <div className="section-head-quote">
            “Best App For Students”
          </div>
          <div className="user-section-sub-text">
            Finally, an app that ensures you don’t get scammed and allows you
            to buy and sell student tickets quickly.
          </div>
          <div className="username bold">- ldvoss</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials