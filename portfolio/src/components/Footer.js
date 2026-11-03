import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
        <div className="contact-container" id="contact">
            <h1 className="sub-title-outline"> CONTACT </h1>
            <div className="social-links-container">
                <img src={`${process.env.PUBLIC_URL}/img/contact/linkedin.png`} className="social-img" alt="LinkedIn"/>
                <img src={`${process.env.PUBLIC_URL}/img/contact/github.png`} className="social-img" alt="GitHub"/>
                <img src={`${process.env.PUBLIC_URL}/img/contact/email.png`} className="social-img" alt="Email"/>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
