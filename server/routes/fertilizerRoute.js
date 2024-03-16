const express = require("express");
const router = express.Router();
const fertilizerController = require("./../controller/fertilizerController");
const authController = require("./../controller/userController");

router.post("/postProduct", prodController.uploadFile, authController.protect, prodController.postProduct);
router.get("/getAllFertilizers", authController.protect, fertilizerController.getAllFertilizer);

module.exports = router;
