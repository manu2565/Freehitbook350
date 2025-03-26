import React from "react";
import './Socialmedia.css'
import { Link } from "react-router-dom";

function Socialmedia() {
  return   <div className="social-icon desktop-social-icons">
  <ul>
    <li>
      <Link to="https://wa.me/wa.me/+918469489880" target="_blank">
        <img
          src="assets/images/whatsapp-icon.webp"
          alt=""
        />
      </Link>
    </li>
    <li>
      <Link to="https://wa.me/+918469489880" target="_blank">
        <img src="assets/images/telegram-icon.webp" alt="" />
      </Link>
    </li>
    <li>
      <Link to="https://wa.me/+918469489880" target="_blank">
        <img src="assets/images/instagram-icon.webp" alt="" />
      </Link>
    </li>
    <li>
      <Link to="https://wa.me/+918469489880" target="_blank">
        <img src="assets/images/facebook-icon.webp" alt="" />
      </Link>
    </li>
  </ul>
</div>;
}

export default Socialmedia;
