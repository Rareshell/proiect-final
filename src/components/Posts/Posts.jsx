import React from "react";
import Poster from "../Poster/Poster";
import "./Posts.css";

export default function Posts({ posters, deletePoster }) {
  return (
    <div className="posts">
      <div className="postsContent">
        {posters.map((poster) => (
          <Poster
            key={poster.id}
            id={poster.id}
            title={poster.title}
            content={poster.text}
            imageUrl={poster.imageUrl}
            onDelete={deletePoster}
          />
        ))}
      </div>
    </div>
  );
}
