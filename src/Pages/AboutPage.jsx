// AboutPage.js
import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h2 className="title">About Me</h2>
        <p>
          Welcome to my personal journal! My name is{" "}
          <span style={{ color: "dark", fontWeight: "bold" }}>Rares</span> and I
          created this website to document my thoughts, experiences, and
          memories.
        </p>
        <p>
          Journaling has been an important part of my life, allowing me to
          reflect on my journey, express my emotions, and organize my thoughts.
        </p>
        <p>
          In this journal, you'll find entries about my daily life, travels,
          challenges, and moments of joy. Each entry is a piece of my story, and
          I'm excited to share it with you.
        </p>
        <p>Thank you for visiting my journal and being a part of my journey!</p>
      </div>
    </div>
  );
}

export default AboutPage;
