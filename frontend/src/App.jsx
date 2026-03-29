import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Student Pages
import StudentLogin from "./pages/student/StudentLogin";
import StudentRegister from "./pages/student/StudentRegister";
import StudentDashboard from "./pages/student/StudentDashboard";
import CodeEditor from "./pages/student/CodeEditor";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddQuestion from "./pages/admin/AddQuestion";
import EvaluateStudents from "./pages/admin/EvaluateStudents";
import ManageQuestions from "./pages/admin/ManageQuestions";
import ViewSubmissions from "./pages/admin/ViewSubmissions";
import Leaderboard from "./pages/admin/Leaderboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* Student Routes */}
        <Route path="/" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegister />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/editor/:id" element={<CodeEditor />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-question" element={<AddQuestion />} />
        <Route path="/admin/evaluate" element={<EvaluateStudents />} />
        <Route path="/admin/manage" element={<ManageQuestions />} />
        <Route path="/admin/submissions" element={<ViewSubmissions />} />
        <Route path="/admin/leaderboard" element={<Leaderboard />} />
        

      </Routes>
    </Router>
  );
}

export default App;