const uniqueValidator = require("mongoose-unique-validator");
const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
DataSchema.plugin(uniqueValidator);
const userModel = mongoose.model("users", DataSchema);

module.exports = userModel;
