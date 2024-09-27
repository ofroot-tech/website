import React from 'react';

export default function Hero() {
  return (
    <main>
      <div className="content">
        <h1>We are Revolutionizing Heart Health <br/> through Advanced AI</h1>
      </div>

      <style jsx>{`
        main {
          background-color: #F27C72; /* Peach color from the design */
          color: white;
          padding: 80px 20px;
          text-align: left;
          height: calc(100vh - 80px); /* Full viewport height minus header */
          display: flex;
          align-items: flex-start; /* Align content closer to the top */
          opacity: 0;
          animation: fadeIn 1.5s ease-in-out forwards; /* Fade-in animation for the main section */
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .content {
          max-width: 800px;
          margin: 0;
          opacity: 0;
          transform: translateY(20px); /* Slide from below */
          animation: slideInContent 1.5s ease-in-out forwards; /* Smooth slide-in animation for content */
        }

        @keyframes slideInContent {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h1 {
          font-size: 4em; /* Large heading */
          font-weight: bold;
          line-height: 1.2em;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          animation: slideInHeading 1.5s ease-in-out forwards 0.5s; /* Delayed slide-in for the heading */
        }

        @keyframes slideInHeading {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .content {
            max-width: 100%;
            margin: 0 auto; /* Center content on mobile */
          }

          h1 {
            font-size: 2.5em; /* Adjust heading size for mobile */
          }
        }
      `}</style>
    </main>
  );
}
