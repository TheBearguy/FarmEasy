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

export default function ProductCard({
    category,
    description,
    img,
    name,
    price,
}: ProductProps) {
    const [quantity, setQuantity] = useState(0);
    return (
        <Card className="w-[350px] bg-slate-300">
            <CardHeader className="rounded-md overflow-hidden">
                <img
                    src={img}
                    alt={name}
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
                            <DialogTitle>{name}</DialogTitle>
                            <DialogDescription>{description}</DialogDescription>
                        </DialogHeader>

                        <Box>
                            <img src={img} className="rounded-lg" />
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
                <Button>
                    Add To Cart &nbsp;<b>${price}</b>
                </Button>
            </CardFooter>
        </Card>
    );
}
