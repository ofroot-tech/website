import React from 'react';

export default function Hero() {
  return (
    <main>
      <div className="content">
        <h1>We are Revolutionizing Heart Health <br/> through Advanced AI </h1>
      </div>

      <style jsx>{`
        main {
          background-color: #F27C72; /* Peach color from the design */
          color: white;
          padding: 80px 20px; /* Reduced padding to minimize space */
          text-align: left;
          height: calc(100vh - 80px); /* Full viewport height minus header */
          display: flex;
          align-items: flex-start; /* Align content closer to the top */
        }

        .content {
          max-width: 800px;
          margin: 0; /* Align content to the left */
        }

        h1 {
          font-size: 4em; /* Large heading */
          font-weight: bold;
          line-height: 1.2em;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.5em;
        }

        @media (max-width: 768px) {
          .content {
            max-width: 100%; /* Full width on mobile */
            margin: 0 auto; /* Center content on mobile */
          }

          h1 {
            font-size: 2.5em; /* Adjust heading size for mobile */
          }
          
          p {
            font-size: 1.2em; /* Adjust paragraph size for mobile */
          }
        }
      `}</style>
    </main>
  );
}
