import { useParams } from "react-router-dom";
import { useState } from "react";

function CodeEditor() {

  const { id } = useParams();

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");

  const handleRun = () => {
    // temporary run logic
    setOutput("Running code...");
  };

  const handleSubmit = () => {
    alert("Submitted Successfully");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Code Editor</h2>

      <h3>Question ID: {id}</h3>

      <div>
        <label>Select Language:</label>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      <br />

      <textarea
        rows="15"
        cols="80"
        placeholder="Write your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleRun}>Run</button>

      <button 
        onClick={handleSubmit}
        style={{ marginLeft: "10px" }}
      >
        Submit
      </button>

      <br />
      <br />

      <h3>Output</h3>

      <pre>{output}</pre>

    </div>
  );
}

export default CodeEditor;