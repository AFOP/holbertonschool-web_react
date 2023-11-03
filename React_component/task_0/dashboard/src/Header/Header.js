import React, { Fragment } from 'react';
import logo from '../assets/Holberton Logo.jpg';
import './Header.css';


function Header() {
  return(
    <Fragment>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>
    </Fragment>
  );
}

export default Header;
