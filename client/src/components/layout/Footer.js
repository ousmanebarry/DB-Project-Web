import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
          Contact Us
        </p>
        <div className='input-areas'>
          <h5 style={{paddingTop:"20px"}}> Call us at (333)-333-4444</h5>
          <h5>or by email at hotel.com</h5>
        </div>
      </section>
    </div>
  );
}

export default Footer;