const productModel = require("../Models/productModel");

//! Create Product
exports.createProduct = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await productModel.create(reqBody);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    res.status(500).json({ status: "error", error: e });
  }
};

//! Get All Product
exports.getAllProducts = async (req, res) => {
  try {
    let data = await productModel.aggregate([
      {
        $project: {
          title: 1,
          short_des: 1,
          price: 1,
          discount: 1,
          discount_price: 1,
          image: 1,
          stock: 1,
          star: 1,
          remark: 1,
          createdDate: {
            $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
          },
        },
      },
    ]);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    res.status(200).json({ status: "error", error: e });
  }
};

