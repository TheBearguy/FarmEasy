import React, { useState, useEffect } from "react";

import { Box } from "@components/common/containers";
import { Avatar, AvatarFallback, AvatarImage } from "@components/common/avatar";

import { productApi } from "@/api";

import { ProductProps } from "@/types";

const RightComp: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [product, setProduct] = useState<ProductProps[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        async function fetchProducts() {
            try {
                const response = await fetch(productApi.GET_ALL_USER_PRODUCTS, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                setProduct(data.products);
                console.log(data);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <Box className="space-y-8 overflow-y-auto px-10 py-5">
            {product.map((item, index) => (
                <Box className="flex items-center" key={index}>
                    <Avatar className="h-9 w-9">
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
                    <Box className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {item.prodName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {item.prodDescription}
                        </p>
                    </Box>
                    <Box className="ml-auto font-medium">₹{item.prodPrice}</Box>
                </Box>
            ))}

            {children}
        </Box>
    );
};

export default RightComp;
