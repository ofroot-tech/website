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
        <div className="logo">OFHEALTH</div>
        <div className="nav-container">
          <ul className="nav-links">
            {/* Example links can be added here */}
          </ul>
          <div className="icons">
            {/* <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="cart"><FontAwesomeIcon icon={faShoppingCart} /> 0</a> */}
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
        }

        .logo {
          color: white;
          font-size: 1.5em;
          font-weight: bold;
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
        }

        .icons a {
          color: white;
          text-decoration: none;
          font-size: 1.2em;
        }

        .cart {
          font-size: 1em;
          position: relative;
        }
      `}</style>
    </header>
  );
}
