// import "./loginjs.js"
import "./login.css";
import video1 from "../Pics/vid2.mp4";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);

  function submitForm(event) {
    // Prevent the form from submitting automatically
    event.preventDefault();

    // Get the username and password inputs
    const usernameInput = document.getElementById("admin");
    const passwordInput = document.getElementById("password");

    // Check if the username and password are correct
    if (
      usernameInput.value === "admin" &&
      passwordInput.value === "admin"
    ) {
      setSubmit(true);
      navigate("/admin"); // Navigate to the admin page on successful login
    } else {
      setSubmit(false);
      // If the username and password are incorrect, display an error message
      alert("Incorrect username or password.");
    }
  }

  return (
    <div>
      {submit ? <></> : (
        <div>
          <video autoplay muted loop id="myVideo">
            <source src={video1} type="video/mp4" />
          </video>
          <div className="login-box">
            <h2>Login</h2>
            <form>
              <div className="user-box">
                <input type="text" id="admin" required />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" id="password" required />
                <label>Password</label>
              </div>
              <a
                href="/"
                id="submit-button"
                onClick={submitForm}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
