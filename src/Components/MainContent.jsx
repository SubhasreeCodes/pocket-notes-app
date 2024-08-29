import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <img src="/image1.png" alt="Illustration" className="illustration" />
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
      <footer className="footer">
      🔒end-to-end encrypted
      </footer>
    </div>
  );
};

export default MainContent;
