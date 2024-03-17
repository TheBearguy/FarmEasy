import { useState, useEffect } from "react";
import { Main, Box, Wrapper } from "@components/common/containers";
import { Typography } from "@components/common/typography";
import { Button } from "@components/common/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@components/common/dialog";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@components/common/card";
import { farmerApi } from "@/api";
import { toast } from "sonner";

interface FertilizerProps {
    fertName: string;
    fertDescription: string;
    fertImage: string;
    category: string;
    fertPrice: string;
}

export default function Buy() {
    const [products, setProducts] = useState<FertilizerProps[]>([]);
    const [cart, setCart] = useState<
        { product: FertilizerProps; quantity: number }[]
    >([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(farmerApi.GET_ALL_FERTILIZERS, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setProducts(data.fertilizers);
                toast.success("Products fetched successfully", {
                    position: "bottom-right",
                });
            } catch (error) {
                toast.error("Failed to fetch products", {
                    position: "bottom-right",
                });
            }
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        const farmerCart = localStorage.getItem("FarmerCart");
        if (farmerCart) {
            setCart(JSON.parse(farmerCart));
        }
    }, []);

    const addToCart = (product: FertilizerProps) => {
        const index = cart.findIndex(
            (item) => item.product.fertName === product.fertName,
        );
        if (index !== -1) {
            // If item is already in cart, update its quantity
            const updatedCart = [...cart];
            updatedCart[index].quantity += 1;
            console.log("Updated Cart (Add):", updatedCart); // Log updated cart
            setCart(updatedCart);
        } else {
            // If item is not in cart, add it
            const updatedCart = [...cart, { product, quantity: 1 }];
            console.log("Updated Cart (Add):", updatedCart); // Log updated cart
            setCart(updatedCart);
        }
    };

    const increaseQuantity = (productName: string) => {
        const updatedCart = cart.map((item) => {
            if (item.product.fertName === productName) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        console.log("Updated Cart (Increase):", updatedCart); // Log updated cart
        setCart(updatedCart);
    };

    const decreaseQuantity = (productName: string) => {
        const updatedCart = cart.map((item) => {
            if (item.product.fertName === productName && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        console.log("Updated Cart (Decrease):", updatedCart); // Log updated cart
        setCart(updatedCart);
    };

    const saveToLocalStorage = () => {
        localStorage.setItem("FarmerCart", JSON.stringify(cart));
    };

    return (
        <Main className="flex flex-col relative top-0.5 pt-5 px-4">
            <Typography variant="h2" className="border-b-0 max-md:text-2xl">
                Buy all the necessities in one click 👋
            </Typography>
            <Box className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 gap-10">
                {products.map((item, index) => (
                    <Card className="w-[350px] bg-slate-300" key={index}>
                        <CardHeader className="rounded-md overflow-hidden">
                            <img
                                src={`http://localhost:5001/${item.fertImage}`}
                                alt={item.fertName}
                                className="w-full h-40 object-cover rounded-md"
                            />
                        </CardHeader>
                        <CardContent>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Read More</Button>
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
                                            src={`http://localhost:5001/${item.fertImage}`}
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
                        <CardFooter className="flex justify-between">
                            <Box className="space-x-1">
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        decreaseQuantity(item.fertName)
                                    }
                                >
                                    -
                                </Button>
                                <Wrapper className="font-bold">
                                    {cart.find(
                                        (cartItem) =>
                                            cartItem.product.fertName ===
                                            item.fertName,
                                    )?.quantity || 0}
                                </Wrapper>
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        increaseQuantity(item.fertName)
                                    }
                                >
                                    +
                                </Button>
                            </Box>
                            <Button
                                onClick={() => {
                                    addToCart(item);
                                    saveToLocalStorage();
                                }}
                            >
                                Add To Cart &nbsp;<b>${item.fertPrice}</b>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </Box>
        </Main>
    );
}
