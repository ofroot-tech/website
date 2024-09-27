import React from 'react';

export default function Info() {
  return (
    <section className="image-text-section">
      <div className="image-container">
        <img
          src="/assets/heart-image.png"
          alt="Conference artwork"
        />
      </div>
      <div className="text-container">
        <p>
          At ofroot.health, we are on a mission to empower healthcare providers and patients with cutting-edge AI solutions that enhance heart health monitoring and diagnostics. Our suite of AI-enabled tools is designed to minimize errors, improve patient outcomes, and bring a new level of precision and care to heart health management.
        </p>
      </div>

      <style jsx>{`
        .image-text-section {
          display: flex;
          flex-direction: row;
          background-color: #F27C72;
          padding: 10px 20px;
          align-items: center;
          justify-content: space-between;
          margin-top: -800px;
          opacity: 0;
          animation: fadeIn 1.5s ease-in-out forwards; /* Fade-in for entire section */
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .image-container {
          flex: 1;
          text-align: center;
          opacity: 0;
          transform: translateX(-30px); /* Slide in from the left */
          animation: slideInImage 1.5s ease-in-out forwards 0.3s; /* Delayed for smooth effect */
        }

        @keyframes slideInImage {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .image-container img {
          max-width: 80%;
          height: auto;
          border-radius: 8px;
        }

        .text-container {
          flex: 1;
          padding: 10px;
          color: white;
          font-size: 1.1em;
          line-height: 1.4em;
          opacity: 0;
          transform: translateX(30px); /* Slide in from the right */
          animation: slideInText 1.5s ease-in-out forwards 0.6s; /* Delayed for smooth effect */
        }

        @keyframes slideInText {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .text-container p {
          max-width: 400px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .image-text-section {
            flex-direction: column;
            padding: 10px;
            margin-top: -900px;
          }

          .image-container {
            margin-bottom: 10px;
          }

          .image-container img {
            max-width: 100%;
          }

          .text-container {
            padding: 0;
            text-align: left;
            font-size: 1em;
          }

          .text-container p {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .text-container {
            font-size: 0.9em;
          }

          .image-container img {
            max-width: 90%;
          }
        }
      `}</style>
    </section>
  );
}
