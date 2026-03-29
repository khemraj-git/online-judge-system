import { useState } from "react";

function CreateContest() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("college");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Contest Created (Backend next)");
  };

  return (
    <div className="container">

      <div className="card">

        <h2>Create Contest</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Contest Name"
            className="auth-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="auth-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="college">College</option>
            <option value="course">Course</option>
            <option value="admission">Admission</option>
            <option value="hiring">Hiring</option>
          </select>

          <h4>Start Time</h4>

          <input
            type="date"
            className="auth-input"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <input
            type="time"
            className="auth-input"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <h4>End Time</h4>

          <input
            type="date"
            className="auth-input"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <input
            type="time"
            className="auth-input"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <button>
            Create Contest
          </button>

          <button
            onClick={() => window.location.href="/admin/add-contest-question"}
            >
            Add Questions
            </button>

        </form>

      </div>

    </div>
  );
}

export default CreateContest;