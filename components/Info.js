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
          padding: 10px 20px; /* Reduced padding */
          align-items: center;
          justify-content: space-between;
          margin-top: -800px; /* Reset margin */
        }

        .image-container {
          flex: 1;
          text-align: center;
        }

        .image-container img {
          max-width: 80%;
          height: auto;
          border-radius: 8px;
        }

        .text-container {
          flex: 1;
          padding: 10px; /* Reduced padding */
          color: white;
          font-size: 1.1em; /* Adjusted font size */
          line-height: 1.4em; /* Adjusted line height */
        }

        .text-container p {
          max-width: 400px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .image-text-section {
            flex-direction: column;
            padding: 10px; /* Reduced padding for mobile */
            margin-top: -900px;
          }

          .image-container {
            margin-bottom: 10px; /* Reduced spacing */
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
