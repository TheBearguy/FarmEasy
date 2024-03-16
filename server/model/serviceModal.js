import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
    {
        serName: {
            type: String,
            required: true,
            trim: true,
        },
        serImage: {
            type: String,
            required: true,
        },
        serPrice: {
            type: Number,
            required: true,
        },
        serDescription: {
            type: String,
        },
        serQuantity: {
            type: String,
        },
        farmer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Services = mongoose.model("Course", ServiceSchema);
export default Services;
