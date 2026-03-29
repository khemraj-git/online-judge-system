import { useState } from "react";

function AddContestQuestions() {

  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Question Added (Backend Next)");
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