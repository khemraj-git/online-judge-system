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
    <div style={{ padding: "20px" }}>
      <h2>Student Register</h2>

      <form onSubmit={handleRegister}>

        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Register</button>

      </form>

      <br />

      <button onClick={() => navigate("/")}>
        Back to Login
      </button>

    </div>
  );
}

export default StudentRegister;