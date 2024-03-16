const express = require("express");
const router = express.Router();
const authController = require("./../controller/userController");

router.post("/signup", authController.uploadFile, authController.signup);
router.post("/login", authController.login);

router.get(
    "/getCurrentUserDetails",
    authController.protect,
    authController.getCurrentUserDetails,
);

// router.get(
//     "/getSingleArtistSong",
//     authController.protect,
//     authController.getSingleArtistSong,
// );

// router.get('/getAllUsers', authController.getAllUsers);
// router.get('/:artistName', authController.artistProfile);

module.exports = router;
