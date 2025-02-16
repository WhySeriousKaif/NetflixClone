import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav_content">
        <Link to="/">
          <img
            className="nav_logo"
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
            alt="Netflix brand logo"
          />
        </Link>
      </div>
      <div className="nav-buttons">
        <Link to="/login" className="nav-button">
          Login
        </Link>
        <Link to="/signup" className="nav-button">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Nav;
