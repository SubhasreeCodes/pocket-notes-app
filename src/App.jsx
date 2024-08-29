import React from 'react';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
