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

import { toast } from "sonner";
import { ProductProps } from "@/types";

export default function ProductCard({
    category,
    prodDescription,
    prodImage,
    prodName,
    prodPrice,
    prodQuantity,
}: ProductProps) {
    const textToCopy = () => {
        if (!navigator.clipboard) {
            console.error("Clipboard API not supported");
            return;
        }

        const text = "+919875162835";
        navigator.clipboard
            .writeText(text)
            .then(() => {
                toast.success("Text copied to clipboard", {
                    position: "bottom-right",
                });
            })
            .catch((error) => {
                toast.error("Failed to copy text", {
                    position: "bottom-right",
                });

                console.error("Failed to copy text", error);
            });
    };

    return (
        <Card className="w-[350px] bg-slate-300">
            <CardHeader className="rounded-md overflow-hidden">
                <img
                    src={`https://caffeine-crew-xesh.onrender.com/${prodImage?.split("\\")[1]}`}
                    alt={prodName}
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
                            <DialogTitle>{prodName}</DialogTitle>
                            <DialogDescription>
                                {prodDescription}
                            </DialogDescription>
                        </DialogHeader>

                        <Box>
                            <img
                                src={`https://caffeine-crew-xesh.onrender.com/${prodImage?.split("\\")[1]}`}
                                className="rounded-lg"
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
                <Box className="flex flex-col">
                    <Box className="space-x-1">
                        <Wrapper className="font-bold">
                            Quantity: {prodQuantity}
                        </Wrapper>
                    </Box>
                    <Box className="space-x-1">
                        <Wrapper className="font-bold">
                            Price: {prodPrice}
                        </Wrapper>
                    </Box>
                </Box>
                <Button onClick={textToCopy}>Call Our Agent</Button>
            </CardFooter>
        </Card>
    );
}
