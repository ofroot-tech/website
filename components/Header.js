import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // To avoid adding CSS automatically

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">OFROOTHEALTH</div>
        <div className="nav-container">
          <ul className="nav-links">
            {/* Example links can be added here */}
          </ul>
          <div className="icons">
            {/* Add smooth transitions to the icons */}
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="cart"><FontAwesomeIcon icon={faShoppingCart} /> 0</a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        header {
          background-color: #F27C72;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          opacity: 0;
          animation: fadeIn 1.5s ease-in-out forwards; /* Fade-in animation */
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .logo {
          color: white;
          font-size: 1.5em;
          font-weight: bold;
          opacity: 0;
          transform: translateY(-20px);
          animation: slideDown 1.5s ease-in-out forwards;
        }

        @keyframes slideDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        nav {
          display: flex;
          width: 100%;
          justify-content: space-between; /* Ensure logo on left, icons on right */
        }

        .nav-container {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .icons {
          display: flex;
          gap: 20px;
          opacity: 0;
          transform: translateY(-20px);
          animation: slideInIcons 1.5s ease-in-out forwards;
        }

        @keyframes slideInIcons {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .icons a {
          color: white;
          text-decoration: none;
          font-size: 1.2em;
          transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition */
        }

        .icons a:hover {
          transform: scale(1.1); /* Slight scale on hover */
          color: #FFD700; /* Change color on hover */
        }

        .cart {
          font-size: 1em;
          position: relative;
        }
      `}</style>
    </header>
  );
}
