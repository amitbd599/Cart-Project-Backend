const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    title: { type: String },
    short_des: { type: String },
    price: { type: Number },
    discount: { type: Number },
    discount_price: { type: Number },
    image: { type: String },
    stock: { type: String },
    star: { type: String },
    remark: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const productModel = mongoose.model("products", DataSchema);

module.exports = productModel;
