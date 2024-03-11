import React, { useEffect } from "react";
import Posts from "../Posts/Posts";
import Header from "../Header/Header";
import "./MainContent.css";
import Sidebar from "../Sidebar/Sidebar";
import usePosterService from "../../PosterService";

export default function MainContent() {
  const { posters, addPoster, deletePoster, fetchPosters } = usePosterService();

  useEffect(() => {
    fetchPosters();
  }, [fetchPosters]);

  return (
    <div>
      <Header />
      <div className="main">
        <Posts posters={posters} deletePoster={deletePoster} />
        <Sidebar addPoster={addPoster} />
      </div>
    </div>
  );
}
