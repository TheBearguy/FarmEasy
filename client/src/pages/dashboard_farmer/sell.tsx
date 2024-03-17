import { useEffect, useState } from "react";

import { Typography } from "@components/common/typography";
import { Box, Section, Main } from "@components/common/containers";
import PostForm from "@components/core/dashboard_farmer/post-form";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@components/common/card";

import { farmerApi } from "@/api";
import { ProductProps } from "@/types";

import { toast } from "sonner";

export default function Feed() {
    const [product, setProduct] = useState<ProductProps[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const token = localStorage.getItem("token")
                const res = await fetch(farmerApi.GET_FARMER_PRODUCTS, {
                    headers: {
                        Authorizations: `Bearer ${token}`
                    }
                })

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
        <Main className="space-y-6">
            <Section>
                <PostForm />
            </Section>
            <Section className="flex flex-col justify-center items-center">
                <Box>
                    <Typography variant="h3" className="text-left text-black">
                        Hello
                    </Typography>
                    <Box className="flex flex-col self-center gap-10">
                        {product.map((item, index) => (
                            <Card
                                key={index}
                                className="flex flex-col gap-4 lg:w-[500px] md:w-[300px] w-[150px]"
                            >
                                <CardHeader>
                                    <img src={item.img} alt="post" />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>{item.name}</CardTitle>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Section>
        </Main>
    );
}
