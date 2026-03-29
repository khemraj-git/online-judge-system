import { useNavigate } from "react-router-dom";

function ContestCategories() {

  const navigate = useNavigate();

  const categories = [
    {
      name: "College Contests",
      color: "linear-gradient(135deg,#ff4d6d,#ff758f)",
      path: "college"
    },
    {
      name: "Course Contests",
      color: "linear-gradient(135deg,#7b2ff7,#f107a3)",
      path: "course"
    },
    {
      name: "Admission Contests",
      color: "linear-gradient(135deg,#2193b0,#6dd5ed)",
      path: "admission"
    },
    {
      name: "Hiring Contests",
      color: "linear-gradient(135deg,#56ab2f,#a8e063)",
      path: "hiring"
    }
  ];

  return (
    <div className="container">

      <h2 style={{textAlign:"center", marginBottom:"30px"}}>
        🎯 Contest Categories
      </h2>

      <div className="grid">

        {categories.map((cat) => (
          <div 
            key={cat.name}
            className="category-card"
            style={{background:cat.color}}
            onClick={() => navigate(`/contests/${cat.path}`)}
          >

            <h2>{cat.name}</h2>

            <button>
              View Contests
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ContestCategories;