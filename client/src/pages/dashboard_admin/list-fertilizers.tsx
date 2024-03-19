import { useEffect, useState } from "react";

import { Button } from "@components/common/button";
import { Box, Section, Main } from "@components/common/containers";
import PostForm from "@components/core/dashboard_admin/post-form";

import { Typography } from "@components/common/typography";
import { Card, CardContent, CardHeader } from "@components/common/card";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@components/common/dialog";

import { adminApi } from "@/api";

import { toast } from "sonner";

interface fertilizerProps {
    fertName: string;
    fertDescription: string;
    fertImage: string;
    category: string;
}

export default function Feed() {
    const [product, setProduct] = useState<fertilizerProps[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(adminApi.GET_ALL_FERTILIZERS, {
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
        <Main className="space-y-6">
            <Section>
                <PostForm />
            </Section>
            <Section className="flex flex-col justify-center items-center">
                <Box>
                    <Box className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-20">
                        {product.map((item, index) => (
                            <Card
                                className="w-[350px] bg-green-400 border-2 border-green-700 bg-opacity-35"
                                key={index}
                            >
                                <CardHeader className="rounded-md overflow-hidden">
                                    <img
                                        src={`https://caffeine-crew-xesh.onrender.com/${item.fertImage?.split("\\")[1]}`}
                                        alt={item.fertImage}
                                        className="w-full h-72 object-cover rounded-md border-2 border-black"
                                    />
                                </CardHeader>
                                <CardContent>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" className="border-2 border-black">
                                                Read More
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px] space-y-5">
                                            <DialogHeader>
                                                <DialogTitle>
                                                    {item.fertName}
                                                </DialogTitle>
                                                <DialogDescription>
                                                    {item.fertDescription}
                                                </DialogDescription>
                                            </DialogHeader>

                                            <Box>
                                                <img
                                                    src={`https://caffeine-crew-xesh.onrender.com/${item.fertImage?.split("\\")[1]}`}
                                                    className="rounded-lg"
                                                />
                                            </Box>

                                            <Box className="flex flex-row items-center gap-10">
                                                <Typography variant="h5">
                                                    Category
                                                </Typography>
                                                <Typography
                                                    variant="h6"
                                                    className="border-2 p-2 border-black rounded-md bg-rt-alpha-slate-700"
                                                >
                                                    {item.category}
                                                </Typography>
                                            </Box>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Section>
        </Main>
    );
}
