import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";

const templates = {
  python: `# Python Code
def main():
    print("Hello World")

if __name__ == "__main__":
    main()
`,

  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
`,

  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}
`,

  c: `#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}
`
};

function CodeEditor() {

  const { id,contestId } = useParams();

  const [question, setQuestion] = useState(null);
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(templates.python);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");
  const [contestEnded, setContestEnded] = useState(false);


  useEffect(() => {
    fetchQuestion();
  }, []);

  useEffect(() => {
  fetchContestTime();
  }, []);

  const fetchQuestion = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/contest-question/single/${id}`
      );

      setQuestion(res.data);

      // Auto fill input
      setInput(res.data.input || "");

    } catch (error) {
      console.log(error);
    }
  };

  const handleRun = async () => {

    try {

      setOutput("Running...");
      setStatus("");

      const res = await axios.post(
        "http://localhost:5000/api/run/run",
        {
          code,
          language,
          input,
          expectedOutput: question.expected_output
        }
      );

      setOutput(res.data.output);
      setStatus(res.data.status);

    } catch (error) {

      setOutput("Error running code");

    }

  };

  // handle submit function
  const handleSubmit = async () => {

  try {

    const student = JSON.parse(localStorage.getItem("student"));

    await axios.post(
      "http://localhost:5000/api/submission/submit",
      {
        student_id: student.student_id,
        contest_id: question.contest_id,
        question_id: id,
        code,
        language,
        output,
        status
      }
    );

    alert("Submission Saved");

  } catch (error) {
    console.log(error);
    alert("Submission Failed");
  }

};


const fetchContestTime = async () => {

  const res = await axios.get(
    "http://localhost:5000/api/submission/contest"
  );

  const endTime = new Date(res.data.end_time);

  setInterval(() => {

    const now = new Date();

    if (now > endTime) {
      setContestEnded(true);
    }

  }, 1000);

};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Code Editor</h2>

      {question && (
        <div>
          <h3>{question.title}</h3>
          <p>{question.description}</p>

          <p>
            <b>Input:</b> {question.input}
          </p>

          <p>
            <b>Expected Output:</b> {question.expected_output}
          </p>

          <p>
            <b>Deadline:</b> {question.deadline}
          </p>
        </div>
      )}

      <h3>Select Language</h3>

      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          setCode(templates[e.target.value]);
        }}
      >
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
        <option value="c">C</option>
      </select>

      <br /><br />

      <Editor
        height="400px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
      />

      <br /><br />

      <h3>Input</h3>

      <textarea
        rows="5"
        cols="80"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={handleRun}>
        Run
      </button>

      <button 
          onClick={handleSubmit}
          disabled={contestEnded}
        >
          {contestEnded ? "Contest Ended" : "Submit"}
        </button>

      <h3>Output</h3>

      <div
        style={{
          backgroundColor: "#000",
          color: "#0f0",
          padding: "10px",
          minHeight: "100px"
        }}
      >
        {output}
      </div>

      <h3>Result</h3>

      <div>
        {status === "Passed" && "✅ Passed"}
        {status === "Wrong Answer" && "❌ Wrong Answer"}
      </div>

    </div>
  );
}

export default CodeEditor;