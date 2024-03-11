import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import ContactPage from "./ContactPage";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="contactPage">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}
