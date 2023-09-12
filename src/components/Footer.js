import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
        <a href="https://www.linkedin.com/in/vinayaka-b-v-551135219/"> <LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 techpizzeria.com</p>
    </div>
  );
}

export default Footer;