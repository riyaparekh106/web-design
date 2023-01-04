import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {

  return (
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Login?</h1>
        </div>
        <div className="body">
          <p>Get access to the list of all properties in United States!!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
  );
}

export default Modal;