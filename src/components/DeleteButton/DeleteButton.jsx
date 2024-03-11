import React from "react";
import Button from "react-bootstrap/Button";
import "./DeleteButton.css";

function DeleteButton({ onClick }) {
  const handleClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this poster?"
    );
    if (confirmed) {
      onClick();
    }
  };

  return (
    <Button className="button" variant="danger" onClick={handleClick}>
      Delete
    </Button>
  );
}

export default DeleteButton;
