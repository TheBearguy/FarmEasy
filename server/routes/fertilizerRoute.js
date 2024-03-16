const express = require("express");
const router = express.Router();
const fertilizerController = require("./../controller/fertilizerController");
const authController = require("./../controller/userController");

router.post("/postFertilizers", fertilizerController.uploadFile, authController.protect, fertilizerController.postFertilizers);
router.get("/getAllFertilizers", authController.protect, fertilizerController.getAllFertilizers);

module.exports = router;
