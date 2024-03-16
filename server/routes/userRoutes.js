const express = require("express");
const router = express.Router();
const authController = require("./../controller/userController");

router.post("/signup", authController.uploadFile, authController.signup);
router.post("/login", authController.login);

// router.get(
//     "/getSingleArtist",
//     authController.protect,
//     authController.getSingleArtist,
// );
// router.get(
//     "/getSingleArtistSong",
//     authController.protect,
//     authController.getSingleArtistSong,
// );

// router.get('/getAllUsers', authController.getAllUsers);
// router.get('/:artistName', authController.artistProfile);

module.exports = router;
