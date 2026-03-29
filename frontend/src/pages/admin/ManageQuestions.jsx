import { useEffect, useState } from "react";
import axios from "axios";

function ManageQuestions() {

  const [questions, setQuestions] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/admin/questions"
    );
    setQuestions(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/admin/delete-question/${id}`
    );

    fetchQuestions();
  };

  const handleEdit = (question) => {
    setEditing(question);
  };

  const handleUpdate = async () => {
    await axios.put(
      `http://localhost:5000/api/admin/update-question/${editing.id}`,
      editing
    );

    setEditing(null);
    fetchQuestions();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Questions</h2>

      {editing && (
        <div style={{ border: "2px solid black", padding: "10px" }}>
          <h3>Edit Question</h3>

          <input
            value={editing.title}
            onChange={(e) =>
              setEditing({ ...editing, title: e.target.value })
            }
          />

          <br /><br />

          <textarea
            value={editing.description}
            onChange={(e) =>
              setEditing({ ...editing, description: e.target.value })
            }
          />

          <br /><br />

          <input
            type="datetime-local"
            value={editing.deadline}
            onChange={(e) =>
              setEditing({ ...editing, deadline: e.target.value })
            }
          />

          <br /><br />

          <button onClick={handleUpdate}>
            Update
          </button>

        </div>
      )}

      {questions.map((q) => (
        <div key={q.id} style={{ border: "1px solid black", marginBottom: "10px", padding: "10px" }}>

          <h3>{q.title}</h3>
          <p>{q.description}</p>
          <p>Deadline: {q.deadline}</p>

          <button onClick={() => handleEdit(q)}>
            Edit
          </button>

          <button 
            style={{ marginLeft: "10px" }}
            onClick={() => handleDelete(q.id)}
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default ManageQuestions;