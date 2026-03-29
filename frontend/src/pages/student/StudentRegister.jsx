import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentRegister() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert("Register Successful");

      navigate("/");

    } catch (error) {

      alert("Register Failed");

    }

  };

return (
  <div className="auth-container">

    <div className="auth-card">

      <div style={{ textAlign: "center" }}>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
          width="90"
        />

        <h2 className="auth-title">
          Student Register
        </h2>

      </div>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Enter Name"
          className="auth-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Register
        </button>

      </form>

      <button
        className="auth-button link-button"
        onClick={() => navigate("/")}
      >
        Back to Login
      </button>

    </div>

  </div>
);
}

export default StudentRegister;