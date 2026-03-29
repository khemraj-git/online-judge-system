import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentDashboard() {

  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student"));

  const [questions, setQuestions] = useState([]);

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
  fetchContestTime();
}, []);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/questions"
      );

      setQuestions(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchContestTime = async () => {

  const res = await axios.get(
    "http://localhost:5000/api/submission/contest"
  );

  const endTime = new Date(res.data.end_time);

  setInterval(() => {

    const now = new Date();
    const diff = endTime - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTimeLeft(`${hours}:${minutes}:${seconds}`);

  }, 1000);

};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Dashboard</h2>

      <h3>Contest Timer: {timeLeft}</h3>

      <h3>Welcome, {student?.name}</h3>
      <p>Student ID: {student?.student_id}</p>

      <button onClick={() => {
        localStorage.removeItem("student");
        navigate("/");
      }}>
        Logout
      </button>

      <h3>Available Questions</h3>

      {questions.map((q) => (
        <div 
          key={q.id} 
          style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}
        >
          <h4>{q.title}</h4>
          <p>Deadline: {q.deadline}</p>

          <button onClick={() => navigate(`/editor/${q.id}`)}>
            Solve
          </button>

        </div>
      ))}

    </div>
  );
}

export default StudentDashboard;