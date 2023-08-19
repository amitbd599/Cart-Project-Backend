const userModel = require("../Models/userModel");
const JWT = require("jsonwebtoken");

//! register new user
exports.register = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await userModel.create(reqBody);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    res.status(500).json({ status: "error", error: e });
  }
};

//! User Login
exports.login = async (req, res) => {
  try {
    let reqBody = req.body;

    let data = await userModel.aggregate(
      [{ $match: reqBody }, { $project: { _id: 1, email: 1, img: 1 } }],
      (error, data) => {
        if (data.length > 0) {
          let Payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            data: data[0]["email"],
          };
          let token = JWT.sign(Payload, `${process.env.JWT_AUTH_SECRET_KEY}`);
          console.log(token);
          res
            .status(200)
            .json({ status: "success", token: token, data: data[0] });
        } else {
          res.status(200).json({ status: "unauthorized", data: data });
        }
      }
    );
  } catch (e) {
    res.status(200).json({ status: "error", error: e });
  }
};


