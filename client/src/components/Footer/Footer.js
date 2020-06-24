import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = (props) => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <p id="business">Placebook is a non-profit website looking to help small to large businesses navigate through COVID-19 economy changes.</p>
          </div>
          <div className="col-4">
            <p id="business" className="links">(Under Construction) 
            <div>Check us out at: </div></p>
            <a className="links"
              href="https://facebook.com"
              target="_blank"
              >
                Facebook
              </a>
              <a className="links"
              href="https://twitter.com"
              target="_blank"
              >
                Twitter
              </a>
              <a className="links"
              href="https://instagram.com"
              target="_blank"
              >
                Instagram
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;