const express = require("express");
const router = express.Router();
const adminController = require("./../controller/adminController");

router.get("/getTotolNoOfFarmers", adminController.getTotolNoOfFarmers);
router.get("/getTotolNoOfUsers", adminController.getTotolNoOfUsers);
router.get("/getTotalProductsOfFarmers", adminController.getTotalProductsOfFarmers);
router.get("/getAllUsersAndFarmers", adminController.getAllUsersAndFarmers);
router.get("/productsListed", adminController.productsListed);

// GET REVENUE GENERATED FROM SELLING OF PRODUCTS FROM FARMERS.
// GET : TOTAL NUMBER OF PRODUCTS SOLD

module.exports = router;