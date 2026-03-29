import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CreateContest() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("college");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e) => {

  e.preventDefault();

  const start_time = `${startDate} ${startTime}`;
  const end_time = `${endDate} ${endTime}`;

  try {

    const res = await axios.post(
      "http://localhost:5000/api/contest/create",
      {
        name,
        category,
        start_time,
        end_time
      }
    );

    alert("Contest Created");

    navigate("/admin/manage-contests");

  } catch (error) {
    alert("Error creating contest");
  }

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

          

        </form>

      </div>

    </div>
  );
}

export default CreateContest;