const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        prodName: {
            type: String,
            required: true,
            trim: true,
        },
        prodImage: {
            type: String,
            required: true,
        },
        prodPrice: {
            type: Number,
            required: true,
        },
        prodDescription: {
            type: String,
        },
        prodQuantity: {
            type: String,
        },
        farmerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        },
    },
    {
        timestamps: true,
    },
);

const Products = mongoose.model('Products', ProductSchema);
module.exports = Products;
