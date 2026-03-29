import { useState } from "react";
import axios from "axios";

function AddQuestion() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [input, setInput] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/admin/add-question",
        {
          title,
          description,
          input,
          expectedOutput,
          deadline
        }
      );

      alert("Question Added");

      setTitle("");
      setDescription("");
      setInput("");
      setExpectedOutput("");
      setDeadline("");

    } catch (error) {

      alert("Error adding question");

    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Question</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Expected Output"
          value={expectedOutput}
          onChange={(e) => setExpectedOutput(e.target.value)}
        />

        <br /><br />

        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Question</button>

      </form>

    </div>
  );
}

export default AddQuestion;