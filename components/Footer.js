import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2024 OFROOT HEALTH. All rights reserved.</p>

      <style jsx>{`
        footer {
          background-color: #F27C72;
          color: white;
          text-align: center;
          padding: 20px;
          width: 100%;
          position: relative; /* Changed to relative for better positioning */
          bottom: 0;
        }

        p {
          margin: 0;
          font-size: 1em;
        }

        @media (max-width: 768px) {
          footer {
            padding: 15px;
          }

          p {
            font-size: 0.9em;
          }
        }
      `}</style>
    </footer>
  );
}
