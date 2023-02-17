const dieticianCheck = (req, res, next) => {
  //can only this after authCheck middleware
  //because we save userObj in req there only
  const { userRole } = req.userObj;
  try {
    if (userRole !== "DIETICIAN") {
      return res
        .status(403)
        .send({ type: "error", msg: "You can't access it" });
    }
    if (userRole === "DIETICIAN") {
      next();
    }
  } catch (err) {
    return res.status(500).send({ type: "error", msg: err.message });
  }
};

module.exports = dieticianCheck;
