const db = require("../config/db");

const createContest = (contest, callback) => {

  const query = `
  INSERT INTO contests 
  (name, category, start_time, end_time)
  VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      contest.name,
      contest.category,
      contest.start_time,
      contest.end_time
    ],
    callback
  );
};

module.exports = {
  createContest
};