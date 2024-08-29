import React, { useState } from 'react';
import Modal from 'react-modal';
import './GroupCreationModal.css';

Modal.setAppElement('#root'); // This is important for accessibility

const GroupCreationModal = ({ isOpen, onClose }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleCreate = () => {
    // Handle the group creation logic here
    onClose(); // Close the modal after creation
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      contentLabel="Create New Group"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Create New Group</h2>
      <div className="form-group">
        <label>Group Name  </label>
        <input 
          type="text" 
          className="input-textbox" 
          placeholder="Enter group name" 
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Choose Colour</label>
        <div className="color-options">
          {['#a569bd', '#ff6b6b', '#ffcc00', '#20bf6b', '#4a90e2', '#8e44ad'].map(color => (
            <span 
              key={color} 
              className="color-circle" 
              style={{ backgroundColor: color, border: selectedColor === color ? '2px solid #000' : 'none' }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      </div>
      <button className="create-button" onClick={handleCreate}>
        Create
      </button>
    </Modal>
  );
};

export default GroupCreationModal;
