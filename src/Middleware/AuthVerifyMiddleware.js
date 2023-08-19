const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    let Token = req.headers["token"];
    let dataToken = await JWT.verify(
      Token,
      `${process.env.JWT_AUTH_SECRET_KEY}`
    );

    let email = dataToken["data"];
    req.headers.email = email;
    next();
  } catch (error) {
    res.status(401).json({ status: "unauthorized" });
  }
};
