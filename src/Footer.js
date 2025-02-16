import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Netflix Clone. All rights reserved.</p>
        <p>
          <a href="/terms">Terms of Service</a> |{" "}
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
