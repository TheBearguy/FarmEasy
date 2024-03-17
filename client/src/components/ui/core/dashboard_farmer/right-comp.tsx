import React, { useState, useEffect } from "react";

import { Box } from "@components/common/containers";
import { Avatar, AvatarFallback, AvatarImage } from "@components/common/avatar";

import { farmerApi } from "@/api";

import { ProductProps } from "@/types";

const RightComp: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [product, setProduct] = useState<ProductProps[]>([]);
    const [user, setUser] = useState({
        name: "Kiran Goel",
        email: "demo@gmail.com",
        file: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        async function fetchProducts() {
            try {
                const response = await fetch(farmerApi.GET_FARMER_PRODUCTS, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                setProduct(data.productDetails);
                console.log(data);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        }

        fetchProducts();

        //! add the logic here for fetching the user details
        const data = localStorage.getItem("User");

        if (data) {
            const user = JSON.parse(data);
            setUser(user);
        }
    }, []);

    if (!user) return null;

    return (
        <Box className="space-y-8 overflow-y-auto px-10 py-5">
            <Box className="font-bold text-2xl">
                <h1>{user.name}, these products are currently listed by you</h1>
            </Box>
            {product?.length > 0 &&
                product.map((item, index) => (
                    <Box className="flex items-center" key={index}>
                        <Avatar className="h-28 w-28 border-2 border-black">
                            <AvatarImage
                                src={`http://localhost:5001/${item.prodImage.split("\\")[1]}`}
                                alt="Avatar"
                            />
                            <AvatarFallback>
                                {item.prodName
                                    .split(" ")[0]
                                    .slice(0, 2)
                                    .toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <Box className="ml-4 space-y-3">
                            <p className="leading-none font-bold text-2xl">
                                {item.prodName}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {item.prodDescription}
                            </p>
                        </Box>
                        <Box className="ml-auto font-medium">
                            ₹{item.prodPrice}
                        </Box>
                    </Box>
                ))}

            {children}
        </Box>
    );
};

export default RightComp;
