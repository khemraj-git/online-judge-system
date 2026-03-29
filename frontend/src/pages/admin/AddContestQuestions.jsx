import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function AddContestQuestions() {

  

  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { contestId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [editId, setEditId] = useState(null);


  useEffect(() => {
  fetchQuestions();
}, []);

const fetchQuestions = async () => {

  const res = await axios.get(
    `http://localhost:5000/api/contest-question/${contestId}`
  );

  setQuestions(res.data);

};

const handleSubmit = async (e) => {

  e.preventDefault();

  if (editId) {

    await axios.put(
      `http://localhost:5000/api/contest-question/${editId}`,
      {
        title,
        description,
        difficulty,
        input,
        expected_output: output
      }
    );

    setEditId(null);

  } else {

    await axios.post(
      "http://localhost:5000/api/contest-question/add",
      {
        contest_id: contestId,
        title,
        description,
        difficulty,
        input,
        expected_output: output
      }
    );

  }

  alert("Saved");

  fetchQuestions();

  // Clear form
  setTitle("");
  setDescription("");
  setDifficulty("Easy");
  setInput("");
  setOutput("");

};

const deleteQuestion = async (id) => {

  await axios.delete(
    `http://localhost:5000/api/contest-question/${id}`
  );

  fetchQuestions();

};

const editQuestion = (q) => {

  setTitle(q.title);
  setDescription(q.description);
  setDifficulty(q.difficulty);
  setInput(q.input);
  setOutput(q.expected_output);

  setEditId(q.id);

};

  return (
    <div className="container">

      <div className="card">

        <h2>Manage Contest Questions</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Question Title"
            className="auth-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="auth-input"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <textarea
            placeholder="Description"
            className="auth-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <textarea
            placeholder="Input"
            className="auth-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <textarea
            placeholder="Expected Output"
            className="auth-input"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          />

          <button>
            {editId ? "Update Question" : "Add Question"}
          </button>

        </form>

        <h2>Added Questions</h2>

{questions.map((q) => (

  <div key={q.id} className="card">

    <h3>{q.title}</h3>

    <p>Difficulty: {q.difficulty}</p>

    <button
      onClick={() => editQuestion(q)}
    >
      Edit
    </button>

    <button
      onClick={() => deleteQuestion(q.id)}
    >
      Delete
    </button>

  </div>

))}

      </div>

    </div>
  );
}

export default AddContestQuestions;