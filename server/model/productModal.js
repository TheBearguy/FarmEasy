const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        prodName: {
            type: String,
            required: true,
        },
        prodImage: {
            type: String,
        },
        prodPrice: {
            type: Number,
        },
        prodDescription: {
            type: String,
        },
        prodQuantity: {
            type: String,
        },
        category: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

const Products = mongoose.model('Products', ProductSchema);
module.exports = Products;
