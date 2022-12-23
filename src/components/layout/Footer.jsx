import React from 'react';
import './Footer.css';
import playStore from '../../assets/images/play_store.png';
import iosStore from '../../assets/images/ios_store.png';

const Footer = () => {
  const content = (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p className="footer__title">Get to Know Us</p>
          <p className="footer__link">About Monaaz</p>
          <p className="footer__link">Careers</p>
          <p className="footer__link">Blog</p>
          <p className="footer__link">Sustainability</p>
          <p className="footer__link">Investor Relations</p>
          <p className="footer__link">Cancellation and Return Policy</p>
          <p className="footer__link">Privacy Policy</p>
        </div>
        <div className="footer__center">
          <p className="footer__title">Make Money with Us</p>
          <p className="footer__link">Sell products on Monaaz</p>
          <p className="footer__link">Sell apps on Monaaz</p>
          <p className="footer__link">Become an Affiliate</p>
          <p className="footer__link">Advertise Your Products</p>
          <p className="footer__link">Self-Publish with Us</p>
          <p className="footer__link">Host an Monaaz Hub</p>
          <p className="footer__link">See More Make Money with Us</p>
        </div>
        <div className="footer__right">
          <p className="footer__title">Contact Us</p>
          <p className="footer__link">
            WhatsApp us :&nbsp;
            <span className="footer__contact">+91 89740 003780</span>
          </p>
          <p className="footer__link">
            Call Us :&nbsp;
            <span className="footer__contact">+91 89740 003780</span>
          </p>
          <p className="footer__complaint">
            Should you encounter any bugs, glitches, lack of functionality,
            delayed deliveries, billing errors or other problems on the website,
            please email us on cs@monaaz.com
          </p>
          <p className="footer__title">Download Our App</p>
          <div className="footer__store">
            <img src={playStore} alt="" />
            <img src={iosStore} alt="" />
          </div>
        </div>
      </div>

      <p className="footer__copyright">
        © 2022 All rights reserved. Monaaz LLP
      </p>
    </div>
  );
  return content;
};

export default Footer;
