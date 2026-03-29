const db = require("../config/db");

const getAdmin = (username, callback) => {
  const query = "SELECT * FROM admin WHERE username = ?";
  db.query(query, [username], callback);
};

module.exports = {
  getAdmin
};