const express = require("express");
const router = express.Router();
const { exec } = require("child_process");
const fs = require("fs");

router.post("/run", (req, res) => {

  const { code, language, input,expectedOutput } = req.body;

  let fileName;
  let command;

  if (language === "python") {
    fileName = "code.py";
    fs.writeFileSync(fileName, code);
    command = `python ${fileName}`;
  }

  if (language === "java") {
    fileName = "Main.java";
    fs.writeFileSync(fileName, code);
    command = `javac Main.java && java Main`;
  }

  if (language === "cpp") {
    fileName = "code.cpp";
    fs.writeFileSync(fileName, code);
    command = `g++ code.cpp -o code && code`;
  }

  if (language === "c") {
    fileName = "code.c";
    fs.writeFileSync(fileName, code);
    command = `gcc code.c -o code && code`;
  }

const process = exec(command, (error, stdout, stderr) => {

  if (error) {
    return res.json({
      output: stderr || error.message
    });
  }

  const output = stdout.trim();

  let status = "Wrong Answer";

  if (
    expectedOutput &&
    output.replace(/\s/g, "") === expectedOutput.replace(/\s/g, "")
  ) {
    status = "Passed";
  }

  
  res.json({
    output,
    status
  });

});

  if (input) {
    process.stdin.write(input);
    process.stdin.end();
  }

});

module.exports = router;