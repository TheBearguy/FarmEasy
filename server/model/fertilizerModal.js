const mongoose = require('mongoose');

const FertlizerSchema = new mongoose.Schema(
    {
        fertName: {
            type: String,
            required: true,
        },
        fertImage: {
            type: String,
        },
        fertPrice: {
            type: Number,
        },
        fertDescription: {
            type: String,
        },
        fertQuantity: {
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

const Fertilizer = mongoose.model('Fertilizer', FertlizerSchema);
module.exports = Fertilizer;
