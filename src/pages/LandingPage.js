import React from "react";
import "./LandingPage.css";
import profiles from "../data/profiles/profiles.json";
import Button from "../components/button/Button.js";
import { Link } from "react-router-dom";
import MessageModal from "../components/modals/MessageModal";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <span className="landing-title"> Welcome Bitches...</span>
        <div className="landing-profiles">
          {profiles.map((profile, index) => (
            <div className="landing-profile" key={index}>
              <Link to={`/${profile.link}/`}>
                <img
                  className="landing-image"
                  src={profile.image_src}
                  alt="file not found"
                />
              </Link>
              <span className="landing-display">{profile.display}</span>
            </div>
          ))}
        </div>
        <div>
          <MessageModal/>
          {/*<Button label="About Page" /> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
