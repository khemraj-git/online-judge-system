import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username,
          password
        }
      );

      localStorage.setItem("admin", JSON.stringify(res.data.admin));

      alert("Admin Login Successful");

      navigate("/admin/dashboard");

    } catch (error) {

      alert("Login Failed");

    }
  };

return (
  <div className="auth-container">

    <div className="auth-card">

      <div style={{textAlign:"center"}}>

        <img 
          src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
          width="90"
        />

        <h2 className="auth-title">
          Admin Login
        </h2>

      </div>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Username"
          className="auth-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-button">
          Login
        </button>

      </form>

    </div>

  </div>
);

}

export default AdminLogin;