import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    /* marginRight: "-50%",
    transform: "translate(-50%, -50%)", */
  },
};

Modal.setAppElement("#root");

const CalendarModal = () => {
  
    const [modalIsOpen, setIsOpen] = useState(true);
    
    
    const closeModal = () => {
        setIsOpen(false);
    }
  
  
    return (
    
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
        contentLabel="Example Modal"
      >

          <h1>Hola mundo </h1>
          <hr />
          <span>Hola de nuevo</span>
      </Modal>
    
  );
};

export default CalendarModal;
