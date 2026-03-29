import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditContest() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("college");
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");

  useEffect(() => {
    fetchContest();
  }, []);

  const fetchContest = async () => {

    const res = await axios.get(
      `http://localhost:5000/api/contest/all`
    );

    const contest = res.data.find(c => c.id == id);

    setName(contest.name);
    setCategory(contest.category);
    setStartTime(contest.start_time);
    setEndTime(contest.end_time);

  };

  const handleUpdate = async () => {

    await axios.put(
      `http://localhost:5000/api/contest/${id}`,
      {
        name,
        category,
        start_time,
        end_time
      }
    );

    alert("Contest Updated");

    navigate("/admin/manage-contests");

  };

  return (

    <div className="container">

      <div className="card">

        <h2>Edit Contest</h2>

        <input
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

        <input
          type="datetime-local"
          className="auth-input"
          value={start_time}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <input
          type="datetime-local"
          className="auth-input"
          value={end_time}
          onChange={(e) => setEndTime(e.target.value)}
        />

        <button onClick={handleUpdate}>
          Update Contest
        </button>

      </div>

    </div>

  );
}

export default EditContest;