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
        farmerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        // category: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Category',
        // },
    },
    {
        timestamps: true,
    },
);

const Products = mongoose.model('Products', ProductSchema);
module.exports = Products;
