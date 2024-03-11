import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function NewCardModal({ show, handleClose, handleCreateCard }) {
  const [cardContent, setCardContent] = useState({
    title: "",
    text: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardContent({ ...cardContent, [name]: value });
  };

  const handleCreate = () => {
    handleCreateCard(cardContent);
    setCardContent({ title: "", text: "", imageUrl: "" });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={cardContent.title}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formText">
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter text"
              name="text"
              value={cardContent.text}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              name="imageUrl"
              value={cardContent.imageUrl}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleCreate}>
          Share
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewCardModal;
