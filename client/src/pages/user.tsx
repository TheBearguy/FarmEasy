import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@components/common/button";
import { Box, Main } from "@components/common/containers";

import { CiShoppingCart } from "@/icons";
import { Typography } from "@components/common/typography";
import Card from "@components/core/user/card";

import { toast } from "sonner";

export default function User() {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);

    const handleClick = () => {
        toast.success("Product added to cart", {
            position: "bottom-right",
            duration: 3000,
        });
    };

    return (
        <Main className="flex flex-col justify-center items-center">
            <Box className="w-full flex justify-between px-20 items-center">
                <Box>
                    <Typography variant="h4" className="text-left">
                        FarmEasy
                    </Typography>
                    <Typography variant="h6" className="text-center text-sm">
                        Buy fresh farm produce
                    </Typography>
                </Box>

                <Button
                    className="flex bg-white text-black hover:bg-white active:bg-white focus:bg-white mx-10 my-5 p-1 w-fit relative"
                    onClick={() => navigate("/user-cart")}
                >
                    <CiShoppingCart className="text-2xl" />
                    <Typography
                        variant="h6"
                        className="absolute -bottom-2 -left-1 text-red-600 font-bold"
                    >
                        {cart.length}
                    </Typography>
                </Button>
            </Box>

            <Box className="mt-10 px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-10 gap-5">
                {Array.from({ length: 10 }).map((_, i) => (
                    <Card
                        category="Electronics"
                        description="This is a description of the product"
                        img="https://www.shutterstock.com/image-vector/vector-illustration-detailed-glossy-black-260nw-613618706.jpg"
                        name="Iphone 13 Pro Max"
                        price={1500}
                        quantity={0}
                        key={i}
                    />
                ))}
                <Card
                    category="Electronics"
                    description="This is a description of the product"
                    img="https://www.shutterstock.com/image-vector/vector-illustration-detailed-glossy-black-260nw-613618706.jpg"
                    name="Iphone 13 Pro Max"
                    price={1500}
                    quantity={0}
                    handleClick={handleClick}
                />
            </Box>
        </Main>
    );
}
