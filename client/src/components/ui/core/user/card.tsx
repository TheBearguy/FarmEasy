import { useState } from "react";

import { Button } from "@components/common/button";
import { Box, Wrapper } from "@components/common/containers";
import { Typography } from "@components/common/typography";
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

import { ProductProps } from "@/types";

interface ProductCardProps extends ProductProps {
    handleClick: () => void;
}

export default function ProductCard({
    category,
    prodDescription,
    prodImage,
    prodName,
    prodPrice,
    handleClick,
}: ProductCardProps) {
    const [quantity, setQuantity] = useState(0);

    return (
        <Card className="w-[350px]">
            <CardHeader className="rounded-md overflow-hidden">
                <img
                    src={`https://caffeine-crew-xesh.onrender.com/${prodImage}`}
                    alt="STORE CARD IMAGE"
                    className="rounded-xl transform overflow-hidden max-h-40 object-contain bg-white duration-200 hover:scale-[1.03] cursor-pointer"
                />
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Read More</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] space-y-5">
                        <DialogHeader>
                            <DialogTitle>{prodName}</DialogTitle>
                            <DialogDescription className="text-black">
                                {prodDescription}
                            </DialogDescription>
                        </DialogHeader>

                        <Box>
                            <img
                                src={`https://caffeine-crew-xesh.onrender.com/${prodImage}`}
                                alt="STORE CARD IMAGE"
                                className="rounded-xl"
                            />
                        </Box>

                        <Box className="flex flex-row items-center gap-10">
                            <Typography variant="h5">Category</Typography>
                            <Typography
                                variant="h6"
                                className="border-2 p-2 border-black rounded-md bg-rt-alpha-slate-700"
                            >
                                {category}
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
                            setQuantity((prev) => (prev > 0 ? prev - 1 : 0))
                        }
                    >
                        -
                    </Button>
                    <Wrapper className="font-bold">{quantity}</Wrapper>
                    <Button
                        variant="outline"
                        onClick={() =>
                            setQuantity((prev) => (prev < 5 ? prev + 1 : 5))
                        }
                    >
                        +
                    </Button>
                </Box>
                <Button onClick={handleClick}>
                    Add To Cart &nbsp;<b>${prodPrice}</b>
                </Button>
            </CardFooter>
        </Card>
    );
}
