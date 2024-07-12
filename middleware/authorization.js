
module.exports = async (req, res, next) => {
  const data = req.body;
  const role = data.userRole;
  if (role === "Admin") {
    next();
  }
  if (role !== "Admin") {
    res.status(500).send({ msg: "You are not Authorized!" });
  }
};
