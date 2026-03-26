import { useNavigate } from "react-router-dom";

function StudentDashboard() {

  const navigate = useNavigate();

  // temporary dummy questions
  const questions = [
    {
      id: 1,
      title: "Sum of Two Numbers",
      deadline: "2026-03-30"
    },
    {
      id: 2,
      title: "Palindrome Check",
      deadline: "2026-03-31"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Dashboard</h2>

      <h3>Available Questions</h3>

      {questions.map((q) => (
        <div key={q.id} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
          
          <h4>{q.title}</h4>
          <p>Deadline: {q.deadline}</p>

          <button onClick={() => navigate(`/editor/${q.id}`)}>
            Solve
          </button>

        </div>
      ))}

    </div>
  );
}

export default StudentDashboard;