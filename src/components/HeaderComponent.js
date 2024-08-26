// Header.js
import React from 'react';
import '../styles/HeaderComponent.css'
import { FaBars } from 'react-icons/fa';

function HeaderComponent ({ toggleMenu }) {

  return (
    <div className="header">
      <div className="logo">ShopMore</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </div>
  );
};

export default HeaderComponent;