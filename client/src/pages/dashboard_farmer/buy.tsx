import { useState, useEffect } from "react";
import Card from "@components/core/dashboard_farmer/card";

import { Main, Box } from "@components/common/containers";
import { Typography } from "@components/common/typography";

import { farmerApi } from "@/api";
import { toast } from "sonner";

interface fertilizerProps {
    fertName: string;
    fertDescription: string;
    fertImage: string;
    category: string;
    fertPrice: string;
    fertQuantity: string;
}

export default function Buy() {
    const [product, setProduct] = useState<fertilizerProps[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(farmerApi.GET_ALL_FERTILIZERS, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                setProduct(data.fertilizers);
                console.log(data);

                toast.success("Products fetched successfully", {
                    position: "bottom-right",
                });
            } catch (error) {
                toast.error("Failed to fetch products", {
                    position: "bottom-right",
                });
            }
        }

        fetchPosts();
    }, []);

    return (
        <Main className="flex flex-col relative top-0.5 pt-5 px-4">
            <Typography variant="h2" className="border-b-0 max-md:text-2xl">
                Buy all the necessities in one click 👋
            </Typography>

            <Box className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 gap-10">
                {product.length &&
                    product.map((item, index) => (
                        <Card
                            key={index}
                            prodName={item.fertName}
                            category={item.category}
                            prodImage={item.fertImage}
                            prodDescription={item.fertDescription}
                            prodPrice={parseInt(item.fertPrice)}
                            prodQuantity={parseInt(item.fertQuantity)}
                        />
                    ))}
            </Box>
        </Main>
    );
}
