import React from "react";
import Modal from "react-bootstrap/Modal";

function BiggerPicture({ imageUrl, title, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl} alt={title} style={{ width: "100%" }} />
      </Modal.Body>
    </Modal>
  );
}

export default BiggerPicture;
