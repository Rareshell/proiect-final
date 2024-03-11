import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import NewCardModal from "./NewCardModal/NewCardModal";
import usePosterService from "../../PosterService";

function AddNewCard() {
  const { addPoster } = usePosterService();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleCreateCard = async (cardData) => {
    await addPoster(cardData);
    handleClose();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Share your toughts
      </Button>
      <NewCardModal
        show={showModal}
        handleClose={handleClose}
        handleCreateCard={handleCreateCard}
      />
    </>
  );
}

export default AddNewCard;
