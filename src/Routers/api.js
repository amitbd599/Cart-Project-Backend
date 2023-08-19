const express = require("express");
const AuthVerifyMiddleware = require("../Middleware/AuthVerifyMiddleware");
const userController = require("../Controllers/userController");
const productController = require("../Controllers/productController");
const cartController = require("../Controllers/cartController");

const router = express.Router();

//! ================ Register New User Api =================
router.post("/user-register", userController.register);

//! ================ Login User Api =================
router.get("/user-login", userController.login);

//! ================ Create product Api =================
router.post("/create-product", productController.createProduct);

//! ================ Get All Product Api =================
router.get("/get-all-products", productController.getAllProducts);

//! ================ Create Cart Api =================
router.post("/create-cart", AuthVerifyMiddleware, cartController.createCart);

//! ================ Cart List Api =================
router.post("/cart-list", AuthVerifyMiddleware, cartController.getAllCartList);

//! ================ Delete Project Api =================
router.delete("/delete-cart/:id",AuthVerifyMiddleware,  cartController.deleteCart);

module.exports = router;
