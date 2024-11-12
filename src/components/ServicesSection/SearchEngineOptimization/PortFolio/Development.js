import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Navbar from "../../../HomeSection/Navbar/Navbar";
import Footer from "../../../HomeSection/Footer/Footer";
import "./Development.css";

import Development1 from "../../../../images/ServicesSubPageImages/Development-1.jpg";

const Development = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/portfolio/ux-design-for-tubus");
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid development-first">
        <div className="row">
          <div className="col-md-6">
            <div
              className="development-image-container"
              style={{ cursor: "pointer" }}
              onClick={handleRedirect}
            >
              <img src={Development1} alt="Development" />
              <div className="development-redirect-box">
                <h3>UX Design for Tubus</h3>
                <p>Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="development-second">
        <p>
          <strong>Deprecated:</strong> str_replace(): Passing null to parameter
          #3 ($subject) of type array|string is deprecated in
          <strong>
            /home/codzskil/skilledhyre.com/wp-content/themes/onum/inc/frontend/template-tags.php
          </strong>
          on line <strong>199</strong>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Development;
