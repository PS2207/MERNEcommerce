import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority Copyrights 2022 &copy; MePragyaSinha</p>
        <p>Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 2021-2022, ecommerce.com, Inc. or its affiliates</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/pragyasinha82">Instagram</a>
        <a href="http://youtube.com/psinhasinha">Youtube</a>
        <a href="http://facebook.com/P Sinha">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
