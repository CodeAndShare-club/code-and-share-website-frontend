import React, { useState, useEffect } from 'react';


function Sponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch('https://codeandshare.pythonanywhere.com/sponsors/')
      .then((response) => response.json())
      .then((data) => setSponsors(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="sponsors">
      <h2>Sponsors</h2>
      <div className="sponsors-list">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor">
            <img src={sponsor.icon} alt={sponsor.name} />
            <p>{sponsor.description}</p>
          </div>
        ))}
      </div>
import './sponsors.css';

function Sponsors() {
  return (
    <div>
      <link href="sponsors.css" rel="stylesheet" />
      <div className="sponsors-sponsors">
        <img src="Vector 2.svg" alt="Vector" className="sponsors-vector2" />
        <div className="sponsors-group7">
          <img
            src="Rectangle 17.png"
            alt="ooredoo"
            className="sponsors-rectangle17"
          />
        </div>
        <div className="sponsors-group8">
          <img
            src="Rectangle 18dd.png"
            alt="proxylan"
            className="sponsors-rectangle18"
          />
        </div>
        <div className="sponsors-group9">
          <img
            src="Rectangle 19.png"
            alt="nothing here"
            className="sponsors-rectangle19"
          />
        </div>
        <span className="sponsors-text">Thank you for sponsoring us</span>
        <span className="sponsors-text01"><span>They trusted us</span></span>
        <div className="sponsors-frame14">
          <div className="sponsors-group1">
            <img
              src="Line 5.png"
              alt="Line5117"
              className="sponsors-line5"
            />
            <span className="sponsors-text03"><span>Get in touch with us</span></span>
            <img
              src="/playground_assets/line6119-b1c.svg"
              alt="Line6119"
              className="sponsors-line6"
            />
          </div>
          <div className="sponsors-rights">
            <span className="sponsors-text05"><span>All Rights Reserved</span></span>
            <span className="sponsors-text07"><span>Code &amp; Share 2023</span></span>
            <div className="sponsors-maskgroup">
              <img
                src="Mask group.png"
                alt="Copyright124"
                className="sponsors-copyright"
              />
            </div>
            <img
              src="/playground_assets/line3126-cua.svg"
              alt="Line3126"
              className="sponsors-line3"
            />
          </div>
          <div className="sponsors-contact">
            <div className="sponsors-group6">
              <div className="sponsors-socialicons">
                <div className="sponsors-insta">
                  <img
                    src="Instagram Circle.png"
                    alt="InstagramCircle131"
                    className="sponsors-instagram-circle"
                  />
                  <img
                    src="Insta.png"
                    alt="insta"
                    className="sponsors-rectangle10"
                  />
                </div>
                <div className="sponsors-fb">
                  <img
                    src="Fb.png"
                    alt="Facebook134"
                    className="sponsors-facebook"
                  />
                </div>
                <div className="sponsors-twitter">
                  <img
                    src="twitter.png"
                    alt="Twitter137"
                    className="sponsors-twitter1"
                  />
                </div>
                <div className="sponsors-pinterest">
                  <img
                    src="pinterest.png
    </div>
  );
}
export default Sponsors;
