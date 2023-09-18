import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const buttonClick = () => {
    console.log('Close button has been clicked');
  };

  const buttonStyle = {
    position: 'fixed',
    top: '1em',
    right: '1em',
    background: 'transparent',
    border: 'none',
  };

  const imageStyle = {
    width: '20px',
    height: '20px',
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
      <button onClick={buttonClick} aria-label="Close" style={buttonStyle}>
        <img alt="close icon" src={closeIcon} style={imageStyle} />
      </button>
    </div>
  );
}

export default Notifications;
