import React from 'react';

export default function Navigation(){
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        position: 'fixed',
        width: '100%',
        top: 0,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      };
    
      const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        margin: '0 15px',
        fontWeight: 'bold'
      };
    
    return ( 
        <nav style={navbarStyle}>
        <div className="logo">
            <a href="#" style={linkStyle}>MyWebsite</a>
        </div>
        <div className="nav-links">
            <a href="#home" style={linkStyle}>Home</a>
            <a href="#features" style={linkStyle}>Features</a>
            <a href="#contact" style={linkStyle}>Contact</a>
        </div>
        </nav>
    );
}