import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentDashboard() {

  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student"));

  const [questions, setQuestions] = useState([]);

  const [timeLeft, setTimeLeft] = useState("");

  const [contestStarted, setContestStarted] = useState(false);


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

  const startTime = new Date(res.data.start_time);
  const endTime = new Date(res.data.end_time);

  setInterval(() => {

    const now = new Date();

    if (now >= startTime) {
      setContestStarted(true);
    }

    const diff = endTime - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTimeLeft(`${hours}:${minutes}:${seconds}`);

  }, 1000);

};

  return (
  <div className="container">

    {/* Header */}
    <div className="card">
      <h2>🎯 Coding Contest Dashboard</h2>
      <p>Welcome to Coding Challenge Platform</p>
    </div>

    {/* Timer */}
    <div className="card">
      <h3>⏳ Contest Timer</h3>
      <div className="timer">
        {timeLeft}
      </div>
    </div>

    {/* Contest Not Started */}
    {!contestStarted && (
      <div className="card">
        <h3>🚀 Contest not started yet</h3>
      </div>
    )}

    {/* Questions */}
    {contestStarted && (
      <>
        <h3>🧠 Available Questions</h3>

        {questions.map((q) => (
          <div key={q.id} className="card">

            <h3>{q.title}</h3>

            <p>
              <strong>Deadline:</strong> {q.deadline}
            </p>

            <button 
              onClick={() => navigate(`/editor/${q.id}`)}
            >
              Solve Problem
            </button>

          </div>
        ))}

      </>
    )}

  </div>
);
}

export default StudentDashboard;