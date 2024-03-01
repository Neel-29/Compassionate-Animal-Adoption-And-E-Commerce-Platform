// Import React and necessary hooks
import React, { useState } from 'react';
import './style3.css';

// Define your Login component
function Login() {
  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic
    // For example, send a request to your backend server to validate credentials
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <img className="wave" src="wave.png" alt="Wave" />
      <div className="container">
        <div className="img">
          <img src="login_img.jpg" alt="Login" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src="avtar_img.jpg" alt="Avatar" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
