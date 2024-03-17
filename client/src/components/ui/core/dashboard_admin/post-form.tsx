import { useState } from "react";
import { Button } from "@components/common/button";
import { Section, Box } from "@components/common/containers";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@components/common/dialog";

import { PRODUCT_CATEGORY_FERTILIZER } from "@/data/product_category";

import { adminApi } from "@/api/index";

function Form() {
    const [formData, setFormData] = useState({
        fertName: "",
        fertImage: "",
        fertPrice: "",
        category: "Crop seeds",
        fertDescription: "",
        fertQuantity: "",
    });

    const handleChange = (e) => {
        if (e.target.name === "fertImage") {
            setFormData({ ...formData, fertImage: e.target.files[0] });
            console.log(e.target.files[0], "IMAGE");
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const formDataToSend = new FormData(); // Use FormData for file upload
        formDataToSend.append("fertName", formData.fertName);
        formDataToSend.append("fertPrice", formData.fertPrice);
        formDataToSend.append("category", formData.category);
        formDataToSend.append("fertDescription", formData.fertDescription);
        formDataToSend.append("fertQuantity", formData.fertQuantity);
        formDataToSend.append("fertImage", formData.fertImage);
        console.log("FormData : ", formData.fertImage); // Append file

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
            await fetch(adminApi.ADD_FERTILIZER, requestOptions);

            window.location.reload();
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    return (
        <Box className="grid gap-4 py-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    {" "}
                    <label
                        htmlFor="fertName"
                        className="block text-sm font-medium text-black"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="fertName"
                        name="fertName"
                        value={formData.fertName}
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
                        id="fertDescription"
                        name="fertDescription"
                        value={formData.fertDescription}
                        onChange={handleChange}
                        className="text-black mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="walletAddress"
                        className="block text-sm font-medium text-black"
                    >
                        Upload fertuct Image
                    </label>
                    <input
                        type="file"
                        id="fertImage"
                        name="fertImage"
                        onChange={handleChange}
                        className="text-black mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="fertQuantity"
                        className="block text-sm font-medium text-black"
                    >
                        Quantity
                    </label>
                    <input
                        type="text"
                        id="fertQuantity"
                        name="fertQuantity"
                        value={formData.fertQuantity}
                        onChange={handleChange}
                        className="text-black mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="fertQuantity"
                        className="block text-sm font-medium text-black"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        id="fertPrice"
                        name="fertPrice"
                        value={formData.fertPrice}
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
                        {PRODUCT_CATEGORY_FERTILIZER.map((category, index) => (
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
                    Create
                </button>
            </form>
        </Box>
    );
}

function Post() {
    return (
        <Section className="flex flex-col w-full space-y-6">
            <Box className="flex self-stretch  py-3 border-b border-black">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="bg-custom-border hover:bg-custom-hover transition-all duration-300 font-bold"
                        >
                            Add Fertilizers 
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
