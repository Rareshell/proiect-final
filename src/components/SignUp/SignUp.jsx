// SignUp.js
import React, { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import supabase from "../../client";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        throw error;
      }
      console.log("User signed up successfully:", user);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="signup-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
