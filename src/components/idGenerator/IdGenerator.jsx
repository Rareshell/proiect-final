// IdGenerator.js
import React from "react";

function IdGenerator() {
  const generateID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  return generateID();
}

export default IdGenerator;
