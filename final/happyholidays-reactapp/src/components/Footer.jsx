import React from 'react';
import './Footer.css';
import { Button } from './Button';



function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div className='footer-link-items'>
            <h2>About Us</h2>
            <a href="#">How it works</a>
            <a href="#">Testimonials</a>
            <a href="#">Careers</a>
            <a href="#">Terms of Service</a>
          </div> */}
          {/* <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <a href="#">Contact</a>
            <a href="#">Support</a>
            <a href="#">Destinations</a>
          </div> */}
        </div>
        <div className='footer-link-wrapper'>
          {/* <div className='footer-link-items'>
            <h2>Videos</h2>
            <a href="#">Submit Video</a>
            <a href="#">Ambassadors</a>
          </div> */}
          {/* <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Youtube</a>
            <a href="#">Twitter</a>
          </div> */}
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            {/* <a href="#" className='social-logo'>
              HAPPY HOLIDAYS
            </a> */}
          </div>
          <small className='website-rights'>happyholidays.com</small>
          <div className='social-icons'>
            <a href="#"
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='gg-facebook' />
            </a>
            <a href="#"
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='gg-instagram' />
            </a>
            <a href="#"
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='gg-youtube' />
            </a>
            <a href="#"
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='gg-twitter' />
            </a>  
           </div> 
        </div> 
      </section>
    </div>
  );
}

export default Footer;