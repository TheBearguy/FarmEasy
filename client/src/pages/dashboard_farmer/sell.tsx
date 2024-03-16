import { useEffect, useState } from "react";

import { FaHeart } from "@/icons";

import { Box, Section, Main } from "@components/common/containers";
import PostForm from "@components/core/dashboard_farmer/post-form";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@components/common/card";

import { SellProductProps } from "@/types";

import { toast } from "sonner";

export default function Feed() {
    const [product, setProduct] = useState<SellProductProps[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
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

    console.log(product);

    return (
        <Main className="space-y-6">
            <Section>
                <PostForm />
            </Section>
            <Section className="flex flex-col justify-center items-center">
                <Box>
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
                                <CardFooter>
                                    <FaHeart className="text-red-500 cursor-pointer" />
                                    <span>{item.price}</span>
                                </CardFooter>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Section>
        </Main>
    );
}
