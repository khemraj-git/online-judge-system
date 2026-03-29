import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ContestDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");
  const [timeLeft, setTimeLeft] = useState("01:20:30");
  const [questions, setQuestions] = useState([]);  // ← ADD HERE

  // Fetch Questions
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/contest-question/${id}`
      );

      setQuestions(res.data);

    } catch (error) {
      console.log(error);
    }

  };

  // Timer
 useEffect(() => {

  const interval = setInterval(() => {

    setTimeLeft((prev) => {

      const [h, m, s] = prev.split(":").map(Number);

      let seconds = h * 3600 + m * 60 + s - 1;

      if (seconds <= 0) {
        clearInterval(interval);
        return "00:00:00";
      }

      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      return `${hours}:${minutes}:${secs}`;
    });

  }, 1000);

  return () => clearInterval(interval);

}, []);

  const filteredQuestions = filter === "All"
    ? questions
    : questions.filter(q => q.difficulty === filter);

  return (
    <div className="container">

      <div className="card">

        <h2>🏆 Contest {id}</h2>

        <div className="timer">
          ⏳ Ends in: {timeLeft}
        </div>

      </div>

      {/* Filter */}
      <div className="card">

        <h3>Filter Difficulty</h3>

        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Easy")}>Easy</button>
        <button onClick={() => setFilter("Medium")}>Medium</button>
        <button onClick={() => setFilter("Hard")}>Hard</button>

      </div>

      {/* Questions */}
      <h3>Questions</h3>

      {filteredQuestions.map((q) => (
        <div key={q.id} className="card">

          <h3>{q.title}</h3>

          <p>Difficulty: {q.difficulty}</p>

          <button
            onClick={() => navigate(`/editor/${id}/${q.id}`)}
          >
            Solve Problem
          </button>

        </div>
      ))}

    </div>
  );
}

export default ContestDetail;