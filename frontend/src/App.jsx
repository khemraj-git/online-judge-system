import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { useState,useEffect } from "react";


// Student Pages
import StudentLogin from "./pages/student/StudentLogin";
import StudentRegister from "./pages/student/StudentRegister";
import StudentDashboard from "./pages/student/StudentDashboard";
import CodeEditor from "./pages/student/CodeEditor";
import ContestCategories from "./pages/student/ContestCategories";
import ContestList from "./pages/student/ContestList";
import ContestDetail from "./pages/student/ContestDetail";


// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddQuestion from "./pages/admin/AddQuestion";
import EvaluateStudents from "./pages/admin/EvaluateStudents";
import ManageQuestions from "./pages/admin/ManageQuestions";
import ViewSubmissions from "./pages/admin/ViewSubmissions";
import Leaderboard from "./pages/admin/Leaderboard";
import CreateContest from "./pages/admin/CreateContest";
import AddContestQuestions from "./pages/admin/AddContestQuestions";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    
    <Router>
      {/* Theme Toggle Button */}
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      <Routes>

        {/* Student Routes */}
        <Route path="/" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegister />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/editor/:id" element={<CodeEditor />} />
        <Route path="/contests" element={<ContestCategories />} />
        <Route path="/contests/:category" element={<ContestList />} />
        <Route path="/contest/:id" element={<ContestDetail />} />


        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-question" element={<AddQuestion />} />
        <Route path="/admin/evaluate" element={<EvaluateStudents />} />
        <Route path="/admin/manage" element={<ManageQuestions />} />
        <Route path="/admin/submissions" element={<ViewSubmissions />} />
        <Route path="/admin/leaderboard" element={<Leaderboard />} />
        <Route path="/admin/create-contest" element={<CreateContest />} />
        <Route path="/admin/add-contest-question" element={<AddContestQuestions />} />

      </Routes>
    </Router>
  );
}

export default App;