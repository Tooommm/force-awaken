import React from 'react';
import './Footer.css';
import facebook from '../assets/icon_facebook.png';
import twitter from '../assets/icon_twitter.png';
import instagram from '../assets/icon_instagram.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-bottom">
        <div className="footer-bottom-title">
          <p> <strong>TM Lucasfilm</strong> Ltd. All Rights Reserved.</p>
        </div>
        <div className="wrapper">
          <div className="box1">
            <ul>
              <li>Terms of Use</li>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box2">
            <ul>
              <li>Your California Privacy Rights</li>
              <li>Star Wars at Disney Store</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box3">
            <p>FOLLOW STAR WARS</p>
            <div className="box4">
              <img className="social-media" src={facebook} alt="facebook"></img>
              <img className="social-media" src={twitter} alt="twitter"></img>
              <img className="social-media" src={instagram} alt="instagram"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
