import { useState } from "react";
import { Button } from "@components/common/button";
import { Section, Box } from "@components/common/containers";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@components/common/dialog";

import { PRODUCT_CATEGORY } from "@/data/product_category";

import { productApi } from "@/api/index";

function Form({ onClose }) {
    const [formData, setFormData] = useState({
        prodName: "",
        prodImage: "",
        prodPrice: "",
        category: "Crop seeds",
        prodDescription: "",
        prodQuantity: "",
    });

    const handleChange = (e) => {
        if (e.target.name === "prodImage") {
            setFormData({ ...formData, prodImage: e.target.files[0] });
            console.log(e.target.files[0], "IMAGE");
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const formDataToSend = new FormData(); // Use FormData for file upload
        formDataToSend.append("prodName", formData.prodName);
        formDataToSend.append("prodPrice", formData.prodPrice);
        formDataToSend.append("category", formData.category);
        formDataToSend.append("prodDescription", formData.prodDescription);
        formDataToSend.append("prodQuantity", formData.prodQuantity);
        formDataToSend.append("prodImage", formData.prodImage);
        console.log("FormData : ", formData.prodImage); // Append file

        console.log("FormDataToSend : ", formDataToSend);
        console.log("FormData : ", formData);

        const token = localStorage.getItem("token");
        console.log(token);

        const requestOptions = {
            method: "POST",
            body: formDataToSend, // Send FormData object for file upload
            headers: {
                // "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            await fetch(productApi.ADD_PRODUCT, requestOptions);
            window.location.reload();
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    return (
        <Box className="grid gap-4 py-4">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    {" "}
                    <label
                        htmlFor="prodName"
                        className="block text-sm font-medium text-black"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="prodName"
                        name="prodName"
                        value={formData.prodName}
                        onChange={handleChange}
                        className="text-black mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-black"
                    >
                        Description
                    </label>
                    <input
                        type="text"
                        id="prodDescription"
                        name="prodDescription"
                        value={formData.prodDescription}
                        onChange={handleChange}
                        className="text-black mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="walletAddress"
                        className="block text-sm font-medium text-black"
                    >
                        Upload Product Image
                    </label>
                    <input
                        type="file"
                        id="prodImage"
                        name="prodImage"
                        onChange={handleChange}
                        className="text-black mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="prodQuantity"
                        className="block text-sm font-medium text-black"
                    >
                        Quantity
                    </label>
                    <input
                        type="text"
                        id="prodQuantity"
                        name="prodQuantity"
                        value={formData.prodQuantity}
                        onChange={handleChange}
                        className="text-black mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="prodQuantity"
                        className="block text-sm font-medium text-black"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        id="prodPrice"
                        name="prodPrice"
                        value={formData.prodPrice}
                        onChange={handleChange}
                        className="text-black mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-black"
                    >
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        // onInput={(e) => formData({ role: e.target.value })}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        style={{ color: "black" }}
                    >
                        {PRODUCT_CATEGORY.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-black p-2 rounded-md hover:bg-blue-600 bg-lavender"
                >
                    Add Product
                </button>
            </form>
        </Box>
    );
}

function Post() {

    return (
        <Section className="flex flex-col w-full space-y-6">
            <Box className="flex self-stretch items-end justify-between mx-5 px-5 pb-5 border-b border-black">
                <Box className="text-[1.8rem] font-bold">
                    Get the best fertilizers direct from Indian Government
                </Box>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="bg-custom-border text-xl py-6 rounded-md hover:border-green-600 hover:border-2 mt-5 transition-all duration-300 font-bold"}
                        >
                            Add Products
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <Form />
                    </DialogContent>
                </Dialog>
            </Box>
            
        </Section>
    );
}

export default Post;
