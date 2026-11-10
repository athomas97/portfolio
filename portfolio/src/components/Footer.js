import React from 'react';

function Footer() {
  return (
    <footer>
        <div className="contact-container" id="contact">
            <h1 className="sub-title-outline"> CONTACT </h1>
            <div className="social-links-container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ally-kyle-thomas/"
                  style={{ display: "contents" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/contact/linkedin.png`}
                    className="social-img"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/athomas97"
                  style={{ display: "contents" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/contact/github.png`}
                    className="social-img"
                    alt="GitHub"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:allythomas97@gmail.com"
                  style={{ display: "contents" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/contact/email.png`}
                    className="social-img"
                    alt="Email"
                  />
                </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
