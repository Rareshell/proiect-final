import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import AboutPage from "./AboutPage";

export default function About() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
        <AboutPage />
      </div>
      <Footer />
    </div>
  );
}
