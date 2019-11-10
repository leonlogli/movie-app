import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer container-fluid py-3">
      <div className="row">
        <div className="copyright col text-center">
          <div>Made with love with ReactJS, Material UI and TVAPI</div>
          <div>
            Copyright &copy; {new Date().getFullYear()}. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
