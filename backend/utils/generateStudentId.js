const generateStudentId = (lastId) => {
  if (!lastId) {
    return "S001";
  }

  const number = parseInt(lastId.substring(1)) + 1;
  return "S" + number.toString().padStart(3, "0");
};

module.exports = generateStudentId;