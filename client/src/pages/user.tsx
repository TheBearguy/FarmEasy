import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@components/common/button";
import { Box, Main } from "@components/common/containers";

import { CiShoppingCart } from "@/icons";
import { Typography } from "@components/common/typography";
import Card from "@components/core/user/card";

import { ProductProps } from "@/types";
import { productApi } from "@/api";
import { toast } from "sonner";

export default function User() {
    const navigate = useNavigate();

    const [allProducts, setAllProducts] = useState([]);
    const [cart, setCart] = useState<ProductProps[] | undefined>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem("token");

            try {
                const data = await fetch(productApi.GET_ALL_USER_PRODUCTS, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then((res) => res.json());

                console.log(data);

                setAllProducts(data.products);
            } catch (error) {
                toast.error("Failed to fetch products", {
                    position: "bottom-right",
                    duration: 3000,
                });
            }
        };

        fetchProducts();

        const dataString = localStorage.getItem("Cart");
        if (!dataString) {
            setCart(undefined);
            return;
        }

        if (dataString) {
            setCart(JSON.parse(dataString));
        }
    }, []);

    if (!cart) {

    }

    return (
        <Main className="flex flex-col items-center space-y-10">
            <Box className="w-full flex justify-between px-20 items-center">
                <Box>
                    <Box>
                        <Typography variant="h4" className="text-left">
                            FarmEasy
                        </Typography>
                        <Typography
                            variant="h6"
                            className="text-center text-sm"
                        >
                            Buy fresh farm produce
                        </Typography>
                    </Box>
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
                {allProducts.length > 0 &&
                    allProducts.map((product: ProductProps, index) => {
                        const img = product.prodImage?.split("\\")[1];

                        return (
                            <Card
                                key={index}
                                {...product}
                                prodImage={img}
                            />
                        );
                    })}
            </Box>
        </Main>
    );
}
