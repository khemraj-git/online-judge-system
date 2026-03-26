const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/run", async (req, res) => {
  const { code, language } = req.body;

  try {

    const languageMap = {
      python: 71,
      java: 62,
      c: 50,
      cpp: 54
    };

    const response = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        source_code: code,
        language_id: languageMap[language],
      },
      {
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": "YOUR_API_KEY",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
        }
      }
    );

    res.json(response.data);

  } catch (error) {
    res.status(500).json({ error: "Error running code" });
  }
});

module.exports = router;