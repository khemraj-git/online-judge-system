import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ContestList() {

  const { category } = useParams();
  const navigate = useNavigate();

  const [contests, setContests] = useState([]);

  useEffect(() => {
    fetchContests();
  }, []);

  const fetchContests = async () => {

    const res = await axios.get(
      `http://localhost:5000/api/contest/${category}`
    );

    setContests(res.data);

  };

  return (
    <div className="container">

      <h2>🎯 {category} Contests</h2>

      {contests.map((contest) => (

        <div key={contest.id} className="card">

          <h3>{contest.name}</h3>

          <p>
            Start: {new Date(contest.start_time).toLocaleTimeString()}
          </p>

          <p>
            End: {new Date(contest.end_time).toLocaleTimeString()}
          </p>

          <button
            onClick={() => navigate(`/contest/${contest.id}`)}
          >
            Enter Contest
          </button>

        </div>

      ))}

    </div>
  );
}

export default ContestList;