import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
        <div className="contact-container" id="contact">
            <h1 className="sub-title-outline"> CONTACT </h1>
            <div className="social-links-container">
                <a target="_blank" href="">
                    <img src="/img/contact/linkedin.png" className="social-img" alt="LinkedIn"/>
                </a>
                <a target="_blank" href="">
                    <img src="/img/contact/github.png" className="social-img" alt="GitHub"/>
                </a>
                <a target="_blank" href="">
                    <img src="/img/contact/email.png" className="social-img" alt="Email"/>
                </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
