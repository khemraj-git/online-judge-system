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

    navigate("/dashboard");

    } catch (error) {

      alert("Login Failed");

    }

  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Login</h2>

      <form onSubmit={handleLogin}>

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

        <button type="submit">Login</button>

      </form>

      <br />

      <button onClick={() => navigate("/register")}>
        Register
      </button>

    </div>
  );
}

export default StudentLogin;