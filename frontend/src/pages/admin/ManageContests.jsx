import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManageContests() {

  const [contests, setContests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContests();
  }, []);

  const fetchContests = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/contest/all"
    );

    setContests(res.data);

  };

  const deleteContest = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/contest/${id}`
    );

    fetchContests();

  };

  return (
    <div className="container">

      <h2>Manage Contests</h2>

      {contests.map((contest) => (

        <div key={contest.id} className="card">

  <h3>{contest.name}</h3>

  <p>Category: {contest.category}</p>

  <p>
    Start: {new Date(contest.start_time).toLocaleString()}
  </p>

  <p>
    End: {new Date(contest.end_time).toLocaleString()}
  </p>

  <div style={{display:"flex",gap:"10px"}}>

    <button
      onClick={() =>
        navigate(`/admin/add-contest-question/${contest.id}`)
      }
    >
      Add / Manage Questions
    </button>

    <button
      onClick={() =>
        navigate(`/admin/edit-contest/${contest.id}`)
      }
    >
      Edit
    </button>

    <button
      onClick={() => deleteContest(contest.id)}
    >
      Delete
    </button>

  </div>

</div>

      ))}

    </div>
  );
}

export default ManageContests;