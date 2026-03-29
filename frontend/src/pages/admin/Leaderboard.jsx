import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/submission/leaderboard"
    );

    setData(res.data);

  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Leaderboard</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Student</th>
            <th>Solved</th>
            <th>Last Submission</th>
          </tr>
        </thead>

        <tbody>
          {data.map((s, index) => (
            <tr key={s.student_id}>
              <td>{index + 1}</td>
              <td>{s.name}</td>
              <td>{s.solved}</td>
              <td>{s.last_submission}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Leaderboard;