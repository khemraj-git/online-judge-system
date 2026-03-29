

const express = require("express");
const cors = require("cors");


require("./config/db");

const authRoutes = require("./routes/authRoutes");

const adminRoutes = require("./routes/adminRoutes");

const runRoutes = require("./routes/runRoutes");

const submissionRoutes = require("./routes/submissionRoutes");

const contestRoutes = require("./routes/contestRoutes");

const contestQuestionRoutes = require("./routes/contestQuestionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/run", runRoutes);
app.use("/api/submission", submissionRoutes);
app.use("/api/contest", contestRoutes);
app.use("/api/contest-question", contestQuestionRoutes);



app.get("/", (req, res) => {
    res.send("Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});