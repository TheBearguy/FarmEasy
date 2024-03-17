import { useState, useEffect } from "react";
import { Button } from "@components/common/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@components/common/dialog";

import { Card, CardContent, CardHeader } from "@components/common/card";

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
                            className="w-[350px] bg-blue-400 border-2 border-blue-700 bg-opacity-50"
                            key={index}
                        >
                            <CardHeader className="rounded-md overflow-hidden">
                                <img
                                    src={`http://localhost:5001/${item.fertImage?.split("\\")[1]}`}
                                    alt={item.fertImage}
                                    className="w-full h-72 object-cover rounded-md border-2 border-black"
                                />
                            </CardHeader>
                            <CardContent>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="border-2 border-black"
                                        >
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
                                                src={`http://localhost:5001/${item.fertImage?.split("\\")[1]}`}
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
        </Main>
    );
}
