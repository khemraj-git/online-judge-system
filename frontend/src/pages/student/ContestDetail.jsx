import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ContestDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");
  const [timeLeft, setTimeLeft] = useState("01:20:30");

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => prev); // temporary timer
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const questions = [
    { id: 1, title: "Two Sum", difficulty: "Easy" },
    { id: 2, title: "Binary Search", difficulty: "Medium" },
    { id: 3, title: "Graph Traversal", difficulty: "Hard" }
  ];

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
            onClick={() => navigate(`/editor/${q.id}`)}
          >
            Solve Problem
          </button>

        </div>
      ))}

    </div>
  );
}

export default ContestDetail;