import { useParams, useNavigate } from "react-router-dom";

function ContestList() {

  const { category } = useParams();
  const navigate = useNavigate();

  // temporary dummy contests
  const contests = [
    {
      id: 1,
      name: "College Coding Contest 1",
      start: "01:20:30",
      end: "02:00:00"
    },
    {
      id: 2,
      name: "College Coding Contest 2",
      start: "00:40:10",
      end: "01:20:00"
    }
  ];

  return (
    <div className="container">

      <h2 style={{marginBottom:"20px"}}>
        🎯 {category.toUpperCase()} Contests
      </h2>

      <div className="grid">

        {contests.map((contest) => (
          <div key={contest.id} className="card">

            <h3>{contest.name}</h3>

            <p>Starts in: {contest.start}</p>
            <p>Ends in: {contest.end}</p>

            <button
              onClick={() => navigate(`/contest/${contest.id}`)}
            >
              View Contest
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ContestList;