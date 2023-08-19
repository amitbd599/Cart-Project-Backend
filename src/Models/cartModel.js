const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    user_email: { type: String },
    product_id: { type: mongoose.Schema.Types.ObjectId },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const cartModel = mongoose.model("carts", DataSchema);

module.exports = cartModel;
