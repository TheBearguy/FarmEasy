const Product = require("./../model/productModal");
const User = require("./../model/userModal");

const fs = require("fs");

const multer = require("multer");
const uploadMiddleware = multer({ dest: "./uploads/" });

// UPLOAD FILE -
exports.uploadFile = uploadMiddleware.single("prodImage");
exports.postProduct = async (req, res, next) => {
    try {
        console.log("REQ FILE :", req.file);

        const { originalname, path } = req.file;
        const ext = originalname.split(".")[1];

        console.log(ext);

        const newPath = path + "." + ext;
        fs.renameSync(path, newPath);

        // 1) Check if the user has all the fields filled -
        const {
            prodName,
            prodImage = newPath,
            prodPrice,
            prodDescription,
            prodQuantity,
            category
        } = req.body;

        console.log("REQ BODY", req.body);

        // 3) If above both checks are passed, then start the process of creating new user :
        const products = await Product.create({
            prodName: req.body.prodName,
            prodImage: (req.body.prodImage = newPath),
            category: req.body.category,
            prodDescription: req.body.prodDescription,
            prodPrice: req.body.prodPrice,
            prodQuantity: req.body.prodQuantity,
            farmerID : req.user._id
        });

        await User.findByIdAndUpdate(req.user._id, {
            $push: { Products: products._id },
        })

        console.log("PRODUCTS", products);

        await products.save();
        res.status(200).json(products); // Send only the names of artists in the response
    } catch (e) {
        console.log("ERROR : ", e);
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).exec();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}


exports.getSingleProduct = (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.getFarmerProducts = async (req, res, next) => {
    try {
        const farmerID = req.user._id;

        const productDetails = await User.findById({ _id: farmerID }).populate()

        if (!productDetails) {
            res.status(500).json({ message: "Internal server error" });
        }

        return res.status(200).json({
            message: "Success",
            productDetails
    });
    } catch (err) {
        return res.status(500).json({
            message: "Failed to get products",
            error: 'Error in fetching farmers products',
            message: err.message,
        });
    }
};
