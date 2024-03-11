// ContactPage.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import supabase from "../client";
import "./ContactPage.css"; // Import CSS file for ContactPage styling

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert the contact details into your Supabase table
      const { error } = await supabase
        .from("contacts")
        .insert({ name, email, message });

      if (error) {
        throw error;
      }

      // Clear the form after successful submission
      setName("");
      setEmail("");
      setMessage("");

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error.message);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <Form className="form-items" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        <Button className="form-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactPage;
