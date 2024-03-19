import React from 'react';
import './Header.css';
import img1 from '../recursos/img1.jpg';
import img2 from '../recursos/img2.svg';

function Header() {
  return (
    <header className="header-container">
      <div className="profile">
        <h1>Desarrollador de software</h1>
        <h1>Fabrizzio Ontaneda</h1>
        <h2>"Amo mi profesión y ayudar al mundo a ser un lugar mejor"</h2>
      </div>
      {/*<button className="contact-button">Contáctame</button>*/}
      <div className="profile-img">
        <img src={img1} alt="Tu Foto" />
      </div>
      <div className="profile-logo">
        <img src={img2} alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
