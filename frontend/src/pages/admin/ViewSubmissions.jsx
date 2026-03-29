import { useEffect, useState } from "react";
import axios from "axios";

function ViewSubmissions() {

  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/submission/all"
    );

    setSubmissions(res.data);

  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Submissions</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Student</th>
            <th>Question</th>
            <th>Language</th>
            <th>Status</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {submissions.map((s) => (
            <tr key={s.id}>
                <td>{s.student_name}</td>
                <td>{s.question_title}</td>
                <td>{s.language}</td>
                <td>{s.status}</td>
                <td>{s.submitted_at}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ViewSubmissions;