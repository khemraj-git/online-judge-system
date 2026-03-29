import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function AddContestQuestions() {

  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { contestId } = useParams();

const handleSubmit = async (e) => {

  e.preventDefault();

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

  alert("Question Added");

};

  return (
    <div className="container">

      <div className="card">

        <h2>Add Contest Question</h2>

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
            Add Question
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddContestQuestions;