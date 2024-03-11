import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Poster.css";
import BiggerPicture from "../BiggerPicture/BiggerPicture";
import DeleteButton from "../DeleteButton/DeleteButton";

function Poster({ title, content, imageUrl, id, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [showBiggerPicture, setShowBiggerPicture] = useState(false);

  const handleShowBiggerPicture = () => setShowBiggerPicture(true);
  const handleCloseBiggerPicture = () => setShowBiggerPicture(false);

  const toggleExpansion = () => setExpanded(!expanded);

  const truncatedContent =
    content && content.length > 200
      ? `${content.substring(0, 200)}...`
      : content;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Card className="cardBody" style={{ width: "400px" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img
          variant="top"
          src={imageUrl}
          onClick={handleShowBiggerPicture}
          className="poster-image"
        />
        <Card.Text>
          {expanded ? content : truncatedContent}
          {content && content.length > 200 && (
            <span
              onClick={toggleExpansion}
              style={{ cursor: "pointer", color: "blue" }}
            >
              {expanded ? " Show less..." : " Show more..."}
            </span>
          )}
        </Card.Text>
        <Button variant="primary" href={`/review/${id}`} className="mr-2">
          See reviews
        </Button>
        <DeleteButton className="delete-button" onClick={handleDelete} />
      </Card.Body>
      <BiggerPicture
        imageUrl={imageUrl}
        title={title}
        show={showBiggerPicture}
        handleClose={handleCloseBiggerPicture}
      />
    </Card>
  );
}

export default Poster;
