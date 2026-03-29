import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      
    // Save student data
    localStorage.setItem("student", JSON.stringify(res.data.student));

    alert("Login Successful");

    navigate("/contests");

    } catch (error) {

      alert("Login Failed");

    }

  };

return (
  <div className="auth-container">

    <div className="auth-card">

      <div style={{textAlign:"center"}}>

        <img 
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          width="90"
        />

        <h2 className="auth-title">
          Student Login
        </h2>

      </div>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-button">
          Login
        </button>

      </form>

      <button 
        className="auth-button link-button"
        onClick={() => navigate("/register")}
      >
        Register
      </button>

    </div>

  </div>
);

}

export default StudentLogin;