import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

function App() {
  const [showDog, setShowDog] = useState(false);

  function HandleDogClick(event) {
    event.preventDefault();
    if (showDog == false) setShowDog(true);
    if (showDog == true) setShowDog(false);
  }

  // *Return Code*
  return (
    <>
      <div>
        <div className="top-bar background-color-black">
          <div className="top-bar-name-and-logo">
            <img
              className="top-bar-logo"
              src={process.env.PUBLIC_URL + "/logo.png"}
            />
            <div className="top-bar-name text-color-white">DealDog</div>
          </div>
          <a href="#" className="top-bar-careers text-color-white">
            Careers
          </a>
        </div>

        <div className="main-content background-color-black">
          <div className="main-text">
            <div className="head-text dealdog-gradient-color">
              Your Exclusive Campus Marketplace
            </div>
            <div className="sub-text text-color-white">
              Whether you’re looking for new clothing, need to sublease your
              place for the summer, or simply want to go to a game with your
              friends – our platform has everything you want to buy or sell on
              campus.
            </div>

            <div className="download-apps">
              <a href="#" className="ios-app">
                <img
                  className="top-bar-logo"
                  src={process.env.PUBLIC_URL + "/ios.png"}
                />
              </a>
              <a href="#" className="google-play-app">
                <img
                  className="top-bar-logo"
                  src={process.env.PUBLIC_URL + "/play.png"}
                />
              </a>
            </div>
          </div>

          <img
            className="main-iphone"
            src={process.env.PUBLIC_URL + "/placeholder.jpg"}
          />
        </div>
      </div>

      <div className="banner dealdog-gradient-background-color">
        <div>
          <span>MICHIGAN</span>
          <span>PENN STATE</span>
          <span>ILLONOIS</span>
          <span>OHIO STATE</span>
          <span>RUTGERS</span>
          <span>PURDUE</span>
        </div>
      </div>
      <div className="sections">
        <a href="#section-one" className="section">
          <img
            className="section-logo"
            src={process.env.PUBLIC_URL + "/fast.gif"}
          />
          <div className="section-head-text dealdog-gradient-color">Fast</div>
          <div className="section-sub-text">
            Everything you want to buy or sell at your fingertips with real-time
            messaging and in-app payments.
          </div>
        </a>
        <a href="#section-two" className="section">
          <img
            className="section-logo"
            src={process.env.PUBLIC_URL + "/safe.gif"}
          />
          <div className="section-head-text dealdog-gradient-color">Safe</div>
          <div className="section-sub-text">
            Make deals with the confidence of knowing that everyone you’re
            talking to is a fellow student.
          </div>
        </a>
        <a href="#section-three" className="section">
          <img
            className="section-logo"
            src={process.env.PUBLIC_URL + "/fun.gif"}
          />
          <div className="section-head-text dealdog-gradient-color">Fun</div>
          <div className="section-sub-text">
            Interact with other students through fun chat features and make your
            campus experience unforgettable.
          </div>
        </a>
      </div>

      <div className="sections-desc">
        <div id="section-one">
          <img
            className="section-one-iphone"
            src={process.env.PUBLIC_URL + "/placeholder.jpg"}
          />

          <div className="section-one-text">
            <div className="section-one-head-text dealdog-gradient-color">
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

        <div id="section-two">
          <div className="section-two-text">
            <div className="section-two-head-text dealdog-gradient-color">
              Your Safety is Our Priority
            </div>
            <div className="section-two-sub-text">
              For your security, all users and transactions are verified with “
              <b>.edu</b>” email authentication to prevent fraud. A full block
              and report system in place. Bye-bye scammers!
            </div>
          </div>

          <img
            className="section-two-iphone"
            src={process.env.PUBLIC_URL + "/placeholder.jpg"}
          />
        </div>

        <div id="section-three">
          <img
            className="section-three-iphone"
            src={process.env.PUBLIC_URL + "/placeholder.jpg"}
          />

          <div className="section-three-text">
            <div className="section-three-head-text dealdog-gradient-color">
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
      </div>

      <div className="users dealdog-gradient-background-color">
        <div className="title-user-section text-color-white">
          Not convinced?
        </div>
        <div className="sub-title-user-section text-color-white bold">
          Here’s what current students are saying about DealDog…
        </div>

        <div className="user-sections">
          <a className="user-section">
            <img
              className="section-logo"
              src={process.env.PUBLIC_URL + "/placeholder.jpg"}
            />
            <div className="section-head-quote text-color-red bold">
              “Easily the best student marketplace”
            </div>
            <div className="user-section-sub-text">
              No other app makes it so easy and safe to buy and sell tickets and
              furniture at UMich. I wish I had this for all of my four years!!!
            </div>
            <div className="username bold">- Stfghhffccgf</div>
          </a>
          <a className="user-section">
            <img
              className="section-logo"
              src={process.env.PUBLIC_URL + "/placeholder.jpg"}
            />
            <div className="section-head-quote text-color-red bold">
              “So easy to use!! No bots!”
            </div>
            <div className="user-section-sub-text">
              It’s so nice to just sell to verified students and not a bunch of
              bots and scammers. The app has such an intuitive interface and
              it’s so easy to buy/sell.
            </div>
            <div className="username bold">- patrickp47833</div>
          </a>
          <a className="user-section">
            <img
              className="section-logo"
              src={process.env.PUBLIC_URL + "/placeholder.jpg"}
            />
            <div className="section-head-quote text-color-red bold">
              “Best App For Students”
            </div>
            <div className="user-section-sub-text">
              Finally, an app that ensures you don’t get scammed and allows you
              to buy and sell student tickets quickly.
            </div>
            <div className="username bold">- ldvoss</div>
          </a>
        </div>
      </div>

      <div id="video-section">
        <div className="video-text">
          <div className="video-head-text dealdog-gradient-color">App Demo</div>
          <div className="video-sub-text">
            Curious to see what we look like on screen? Take a sneak peek into
            the exciting universe of DealDog with our app demo.
          </div>
          <div className="video-sub-text">
            Follow along as we guide you through the app's powerful features,
            highlighting how easy it is to discover, negotiate, and secure
            amazing deals within your campus community.
          </div>
        </div>

        <div className="video"></div>
      </div>

      <div className="about background-color-black">
        <div className="about-title dealdog-gradient-color">Who We Are</div>
        <div className="about-desc text-color-white">
          DealDog is a premier campus marketplace{" "}
          <b>made by students for students.</b> But we’re so much more. We
          believe getting what you need should be fast, safe, and fun! We exist
          to connect students who need to buy or sell tickets, goods, subleases,
          and more on their college campus. And we want to do it in the easiest,
          most memorable way possible.
        </div>

        <div className="scroll-images">
          <div className="item">
            <img
              className="about-images"
              src={process.env.PUBLIC_URL + "/placeholder.jpg"}
            ></img>
          </div>
          <div className="item">
            <img
              className="about-images"
              src={process.env.PUBLIC_URL + "/placeholder.jpg"}
            ></img>
          </div>
          <div className="item">
            <img
              className="about-images"
              src={process.env.PUBLIC_URL + "/placeholder.jpg"}
            ></img>
          </div>
          <div className="item">
            <img
              className="about-images"
              src={process.env.PUBLIC_URL + "/placeholder.jpg"}
            ></img>
          </div>
          <div className="item">
            <img
              className="about-images"
              src={process.env.PUBLIC_URL + "/placeholder.jpg"}
            ></img>
          </div>
        </div>
      </div>

      <div className="ready">
        <div className="ready-title dealdog-gradient-color">
          Ready to sniff out a deal?
        </div>
        <div className="ready-desc">
          Download the app for free today, available on the AppStore and the
          Play Store.
        </div>
        <div className="ready-apps">
          <a href="#" className="ready-app">
            <img src={process.env.PUBLIC_URL + "/ios.png"} />
          </a>
          <a href="#" className="ready-app app-middle">
            <img src={process.env.PUBLIC_URL + "/play.png"} />
          </a>
          <a href="#" className="ready-app">
            <button onClick={HandleDogClick}>
              <img src={process.env.PUBLIC_URL + "/dog-button.png"} />
            </button>
          </a>
        </div>

        {showDog ? (
          <div className="gift">
            <img src={process.env.PUBLIC_URL + "/yoda.gif"} />
          </div>
        ) : (
          <div className="gift"></div>
        )}
      </div>

      <div className="contact">
        <div className="contact-us">
          <div className="contact-title dealdog-gradient-color">
            Slide into our DMs.
          </div>
          <div className="contact-desc">
            Whether you’re curious about features, working with us, or just want
            to say hello, we’re all ears!
          </div>
          <div className="contact-desc">
            Email us at{" "}
            <span className="text-color-red bold">
              contactus@dealdog.college
            </span>{" "}
            or fill out the form to the right to send us a message.
          </div>
          <div className="contact-desc">
            We’ll get back to you in two wags of a dog’s tail!
          </div>
        </div>

        <div className="put-contact-info">
          <form className="message-form">
            <div className="first-and-last-input">
              <div className="contact-info" id="first-name">
                <div className="form-title">First Name</div>
                <input type="text"></input>
              </div>
              <div className="contact-info" id="last-name">
                <div className="form-title">Last Name</div>
                <input type="text"></input>
              </div>
            </div>

            <div className="email">
              <div className="contact-info" id="email">
                <div className="form-title">Email</div>
                <input type="text"></input>
              </div>
            </div>

            <div className="message">
              <div className="contact-info" id="message">
                <div className="form-title">Message</div>
                <input type="text"></input>
              </div>
            </div>

            <div className="send">
              <input type="submit" value="Send Message"></input>
            </div>
          </form>
        </div>
      </div>

      <hr className="horizontial-line"></hr>

      <div className="info text-color-white background-color-black">
        <div className="info-left">
          <img
            className="info-logo"
            src={process.env.PUBLIC_URL + "/logo.png"}
          />

          <div className="info-company-name dealdog-gradient-color">
            DealDog App
          </div>

          <div className="info-text">
            DealDog: Campus Marketplace Mobile App
          </div>

          <div className="info-text">
            © 2021 DealDog LLC. All rights reserved.
          </div>

          <div className="info-apps">
            <a href="#" className="info-app">
              <img src={process.env.PUBLIC_URL + "/ios.png"} />
            </a>
            <a href="#" className="info-app info-app-play">
              <img src={process.env.PUBLIC_URL + "/play.png"} />
            </a>
          </div>
        </div>

        <div className="info-right">
          <div className="column-one">
            <div className="info-right-title dealdog-gradient-color">
              DealDog
            </div>
            <div className="info-sub-text">
              <a href="#">About us</a>
            </div>
            <div className="info-sub-text">
              <a href="#">Contact</a>
            </div>
            <div className="info-sub-text">
              <a href="#">Careers</a>
            </div>
          </div>

          <div className="column-two">
            <div className="info-right-title dealdog-gradient-color">Legal</div>
            <div className="info-sub-text">
              <a href="#">Privacy Policy</a>
            </div>
            <div className="info-sub-text">
              <a href="#">Terms and Conditions</a>
            </div>
          </div>

          <div className="column-three">
            <div className="info-right-title dealdog-gradient-color">
              Socials
            </div>
            <div className="info-sub-text">
              <a href="#">Instagram</a>
            </div>
            <div className="info-sub-text">
              <a href="#">Tiktok</a>
            </div>
            <div className="info-sub-text">
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
