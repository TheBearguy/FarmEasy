const Products = require("./../model/productModal");
const User = require("./../model/userModal");

// GET : TOTAL NUMBER OF FARMERS - DONE
exports.getTotolNoOfFarmers = async (req, res) => {
    try {
        const count = await User.countDocuments({ role: "Farmer" });
        res.status(200).json({ totalNoOfFarmers: count });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}

// GET : TOTAL NUMBER OF USERS - DONE
exports.getTotolNoOfUsers = async (req, res) => {
    try {
        const count = await User.countDocuments({ role: "User" });
        res.status(200).json({ totalNoOfUsers: count });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}

// GET : TOTAL PRODUCTS OF FARMERS - DONE
exports.getTotalProductsOfFarmers = async (req, res) => {
    try{
        const products = await Products.find({});
        console.log(products);
        res.status(200).json(products); // Send all users in the response
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// GET : ALL USERS AND ALL FARMERS
exports.getAllUsersAndFarmers = async (req, res) => {
    try{
        const users = await User.find({});
        console.log(users);
        res.status(200).json(users);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({ message: "Internal server error" });
    }
}


// GET : TOTAL REVENUE OF FARMERS

// GET : TOTAL NUMBER OF PRODUCTS LISTED BY FARMERS
exports.productsListed = async (req, res) => {
    try {
        const count = await Products.countDocuments({});
        res.status(200).json({ totalNoOfProductsListed: count });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}

// GET : TOTAL NUMBER OF EQUIMENTS/SEEDS PURCHASED