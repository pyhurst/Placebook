import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = (props) => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 business">
            <p>Placebook is a non-profit website looking to help small to large businesses navigate through COVID-19 economy changes.</p>
          </div>
          <div className="col-sm-2 business links footerTitle">
            <p >Contact Us: </p>
            <br></br>
            <a className="links"
            href= "mailto: placebookservices@gmail.com"
            id="emailLink"
            >
            Email
            </a>
          </div>
          <div className="col-sm-3 business footerTitle">
            <p className="links">(Under Construction) 
            <div>Check us out at: </div></p>
            <a className="links"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a className="links"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a className="links"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
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