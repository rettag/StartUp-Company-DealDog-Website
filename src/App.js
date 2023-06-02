import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  // Place About Section Images Here:
  const images = [process.env.PUBLIC_URL + '/orange.png',
                  process.env.PUBLIC_URL + '/placeholder.jpg',
                  process.env.PUBLIC_URL + '/blue.png']

  // Variables For About Section
  const [image, setImage] = useState('');
  const [clock, setClock] = useState('');
  const [count, setCount] = useState(0);
  let idx = 1;

  // Initial Webserver Function
  useEffect(() => {
    setImage(images[0]);
    setCount(1);
    
    // About Section Scroll Timer
    const timer = setInterval(() => {
      setImage(images[idx]);
      ++idx;
  
      if (idx == images.length) {
        idx = 0;
      }
  
      console.log(idx);
      }, 5000); // Change Time Image Is On Screen
    
    setClock(timer);
    return () => clearInterval(timer);
  }, []);

  // Go Back Button In About Section
  function goBack() {
    clearInterval(clock);
    console.log("goBack before", count);

    setImage(images[count]);
    setCount(count - 1);

    if (count - 1 < 0) {
      setCount(images.length - 1);
      console.log("goBack after", images.length - 1);
    }
    else {
      console.log("goBack after", count - 1);
    }
  }

  // Go Forward Button In About Section
  function goForward() {
    clearInterval(clock);
    console.log("goForward before", count);

    setImage(images[count]);
    setCount(count + 1);

    if (count + 1 == images.length) {
      setCount(0);
      console.log("goForward after", 0);
    }
    else {
      console.log("goForward after", count + 1);
    }
  }


  // *Return Code*
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-name-and-logo">
          <img className="top-bar-logo" src={process.env.PUBLIC_URL + '/placeholder.jpg'}/>
          <div className="top-bar-name">DealDog</div>
        </div>
        <a href='#' className="top-bar-careers">Careers</a>
      </div>

      <div className='main-content'>
        <div className='main-text'>
          <div className='head-text'>
            Lorem ipsum dolor sit amet
          </div>
          <div className='sub-text'>
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <img className='main-iphone' src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
      </div>

      <div className='banner'>
        <img src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
        <img src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
        <img src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
      </div>

      <div className='sections'>
        <a href="#section-one" className='section'>
          <img className="section-logo" src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
          <div className='section-head-text'>
            Lorem
          </div>
          <div className='section-sub-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </a>
        <a href="#section-two" className='section'>
          <img className="section-logo" src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
          <div className='section-head-text'>
            Lorem
          </div>
          <div className='section-sub-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </a>
        <a href="#section-three" className='section'>
        <img className="section-logo" src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
          <div className='section-head-text'>
            Lorem
          </div>
          <div className='section-sub-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </a>
      </div>

      <div className='sections-desc'>
        <div id='section-one'>
          <img className='section-one-iphone' src={process.env.PUBLIC_URL + '/placeholder.jpg'} />

          <div className='section-one-text'>
            <div className='section-one-head-text'>Lorem ipsum dolor</div>
            <div className='section-one-sub-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>

        <div id='section-two'>
          <div className='section-two-text'>
            <div className='section-two-head-text'>Lorem ipsum dolor</div>
            <div className='section-two-sub-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <img className='section-two-iphone' src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
        </div>

        <div id='section-three'>
          <img className='section-three-iphone' src={process.env.PUBLIC_URL + '/placeholder.jpg'} />

          <div className='section-three-text'>
            <div className='section-three-head-text'>Lorem ipsum dolor</div>
            <div className='section-three-sub-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>

      <div className='users'>
        <div className='title-user-section'>Lorem ipsum dolor....</div>

        <div className='user-sections'>
          <a className='user-section'>
            <img className="section-logo" src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
            <div className='section-sub-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </a>
          <a className='user-section'>
            <img className="section-logo" src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
            <div className='section-sub-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </a>
          <a className='user-section'>
          <img className="section-logo" src={process.env.PUBLIC_URL + '/placeholder.jpg'} />
            <div className='section-sub-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </a>
        </div>
      </div>

      <div id="video-section">
        <div className='video-text'>
          <div className='video-head-text'>
            Videoalkfj
          </div>
          <div className='video-sub-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <div className='video'></div>
      </div>

      <div className='about'>
        <div className='about-title'>About</div>
        <div className='about-desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua.
        </div>

        <div className='scroll-images'>
          <button className="about-left-button" onClick={goBack}><FontAwesomeIcon icon={faChevronLeft} /></button>
        
          <img className="about-images" src={image}></img>

          <button className="about-right-button" onClick={goForward}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>

      <div className='ready'>
        <div className='ready-title'>Ready to sniff out a deal?</div>
        <div className='ready-desc'>Download the app for free today, available on the AppStore and the Play Store.</div>
        <div className='ready-apps'>
          <a href="#" className='ready-app'>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpg'}/>
          </a>
          <a href="#" className='ready-app'>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpg'}/>
          </a>
          <a href="#" className='ready-app'>
            <img src={process.env.PUBLIC_URL + '/placeholder.jpg'}/>
          </a>
        </div>

        <div className='gift-gen'></div>
      </div>

      <div className='contact'>
        <div className='contact-us'>
          <div className='contact-title'>
            Slide into our DMs.
          </div>
          <div className='contact-desc'>
            Whether you’re curious about features, working with us, or just want to say hello, we’re all ears!
          </div>
          <div className='contact-desc'>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <div className='put-contact-info'>
          <form class="message-form">
            <div className='first-and-last-input'>
              <div className='contact-info' id="first-name">
                <div className="form-title">First Name</div>
                <input type='text'></input>
              </div>
              <div className='contact-info' id="last-name">
                <div className="form-title">Last Name</div>
                <input type='text'></input>
              </div>
            </div>

            <div className='email'>
              <div className='contact-info' id="email">
                <div className="form-title">Email</div>
                <input type='text'></input>
              </div>
            </div>

            <div className='message'>
              <div className='contact-info' id="message">
                <div className="form-title">Message</div>
                <input type='text'></input>
              </div>
            </div>

            <div className='send'>
              <input type='submit' value="Send Message"></input>
            </div>

          </form>
        </div>
      </div>

      <hr className='horizontial-line'></hr>

      <div className='info'>

        <div className='info-left'>
          <img className="info-logo" src={process.env.PUBLIC_URL + '/placeholder.jpg'} />

          <div className="info-company-name">DealDog</div>

          <div className="info-text">Lorem ipsum dolor sit amet</div>

          <div className="info-text">Lorem ipsum dolor sit amet</div>

          <div className='info-apps'>
            <a href="#" className='info-app'>
              <img src={process.env.PUBLIC_URL + '/placeholder.jpg'}/>
            </a>
            <a href="#" className='info-app'>
              <img src={process.env.PUBLIC_URL + '/placeholder.jpg'}/>
            </a>
          </div>
        </div>

        <div className='info-right'>
          <div className="column-one">
            <div className='info-right-title'>DealDog</div>
            <div className="info-sub-text">Lorem</div>
            <div className="info-sub-text">Lorem</div>
          </div>

          <div className="column-two">
            <div className='info-right-title'>Lorem</div>
            <div className="info-sub-text">Lorem</div>
            <div className="info-sub-text">Lorem</div>
          </div>

          <div className="column-three">
            <div className='info-right-title'>Lorem</div>
            <div className='info-socials'>
              <a>
                <img src={process.env.PUBLIC_URL + '/placeholder.jpg'}/>
              </a>
              <a>
                <img src={process.env.PUBLIC_URL + '/placeholder.jpg'}/>
              </a>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
