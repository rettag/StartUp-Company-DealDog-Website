import React from 'react'


function ContactUs() {
  return (
    <div className="contact">
        {/* Text */}
        <div className="contact-us">
          {/* Title */}
          <div className="contact-title dealdog-text-color">
            Slide into our DMs.
          </div>
          {/* Sub-Text */}
          <div className="contact-desc">
            Whether you’re curious about features, working with us, or just want
            to say hello, we’re all ears!
          </div>
          <div className="contact-desc">
            Email us at{" "}
            <span className="at-email">
              contactus@dealdog.college
            </span>{" "}
            or fill out the form to the right to send us a message.
          </div>
          <div className="contact-desc">
            We’ll get back to you in two wags of a dog’s tail!
          </div>
        </div>

        {/* Email Form */}
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
  )
}

export default ContactUs