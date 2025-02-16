import React from "react";
import ReactModal from "react-modal";
import "./Modal.css";

ReactModal.setAppElement("#root");

function Modal({ isOpen, onRequestClose, content }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <button onClick={onRequestClose} className="modal-close">
        &times;
      </button>
      <div className="modal-content">{content}</div>
    </ReactModal>
  );
}

export default Modal;
