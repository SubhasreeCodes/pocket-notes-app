import React, { useState } from 'react';
import GroupCreationModal from './GroupCreationModal';
import './Sidebar.css';

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="sidebar">
      <h2>Pocket Notes</h2>
      <button 
        className="add-button"
        onClick={openModal}
      >
        +
      </button>
      <GroupCreationModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
      />
    </div>
  );
};

export default Sidebar;
