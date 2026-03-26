import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentRegister() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(name, email, password);

    // temporary navigation
    navigate("/");
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