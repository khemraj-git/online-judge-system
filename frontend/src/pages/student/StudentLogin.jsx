import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(email, password);

    // temporary navigation
    navigate("/dashboard");
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