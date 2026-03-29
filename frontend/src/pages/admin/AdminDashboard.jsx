import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>



        <button onClick={() => navigate("/admin/create-contest")}>
        Create Contest
        </button>

        <button onClick={() => navigate("/admin/manage-contests")}>
        Manage Contests
        </button>

        <button onClick={() => navigate("/admin/submissions")}>
        View Submissions
        </button>

        <button onClick={() => navigate("/admin/leaderboard")}>
        Leaderboard
        </button>

    </div>
  );
}

export default AdminDashboard;