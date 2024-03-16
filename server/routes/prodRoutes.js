const express = require("express");
const router = express.Router();
const prodController = require("./../controller/prodController");
const authController = require("./../controller/userController");

router.post("/postProduct", prodController.uploadFile, authController.protect, prodController.postProduct);
router.post("/getSingleProduct/:id", prodController.getSingleProduct);
router.get("/getFarmerProducts", authController.protect, prodController.getFarmerProducts);

router.get("/getAllProducts", prodController.getAllProducts);

module.exports = router;
