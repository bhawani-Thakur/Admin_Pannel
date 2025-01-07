import React from "react";
import "./modal.css";
const Modal = ({ display, title, description, getstatus }) => {
  return (
    <div
      className={` border modal-container d-flex justify-content-center align-items ${
        display ? "d-block" : "d-none"
      }`}
    >
      {/* Backdrop for blurring background */}
      <div className="modal-backdrop-custom"></div>

      {/* Modal Content */}
      <div className="modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-4 text-center">
            <h5 className="text-primary">{title}</h5>
            <p className="mb-0">{description}</p>
          </div>
          <div className="modal-footer flex-nowrap p-0">
            <button
              type="button"
              className="btn text-primary fs-6 col-6 m-0 border-end"
              onClick={() => {
                getstatus(true);
              }}
            >
            <strong>Yes, enable</strong>
            </button>
            <button
              type="button"
              className="btn text-secondary fs-6 col-6 m-0"
              data-bs-dismiss="modal"
              onClick={() => {
                getstatus(false);
              }}
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
