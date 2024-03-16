import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@components/common/button";
import { Section, Box, Wrapper } from "@components/common/containers";
import { Label } from "@components/common/label";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@components/common/dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@components/common/select";

import { PRODUCT_CATEGORY } from "@/data/product_category";
import { ProductProps } from "@/types";

interface formProps extends ProductProps {}

import { toast } from "sonner";

function Form() {
    const [imageUrl, setImageUrl] = useState<string>("");

    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<formProps>();

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null || e.target.files === undefined) return;

        
        toast.success("Image uploaded successfully", {
            position: "bottom-right",
        });
    };

    const submitPostForm = async (data: formProps) => {
        try {
            toast.success("Post added successfully", {
                position: "bottom-right",
            });

            window.location.reload();
            reset();
        } catch (error) {
            const errorObject = {
                code: (error as Error).name,
                message: (error as Error).message,
            };

            toast.error(`${errorObject.message?.toString()}`, {
                position: "bottom-right",
            });
        }
    };

    return (
        <Box className="grid gap-4 py-4">
            <form onSubmit={handleSubmit(submitPostForm)}>
                <Box className="flex flex-col gap-1">
                    <Box className="flex flex-1 flex-col gap-2">
                        <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                            <Label
                                className="text-black text-md"
                                htmlFor="name"
                            >
                                Name
                            </Label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Enter the product name",
                                    },
                                })}
                                placeholder="Enter Product Name"
                                className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                            />
                            {errors.name && (
                                <Wrapper className="text-red-500 font-semibold text-xs">
                                    {errors.name.message?.toString()}
                                </Wrapper>
                            )}
                        </Box>
                        <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                            <textarea
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message:
                                            "The post text is required. Please enter a post.",
                                    },
                                    validate: (value) =>
                                        value.trim().length > 10 ||
                                        "The description least 10 characters long.",
                                })}
                                id="description"
                                placeholder="Enter the description here..."
                                className="custom-input-field h-min w-full indent-2 text-base font-normal"
                            />
                            {errors.description && (
                                <Wrapper className="text-red-500 font-semibold text-xs">
                                    {errors.description.message?.toString()}
                                </Wrapper>
                            )}
                        </Box>
                    </Box>

                    <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                        <Select>
                            <SelectTrigger className="w-[180px] custom-input-field bg-green-600">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {PRODUCT_CATEGORY.map((category, index) => (
                                    <SelectItem
                                        key={index}
                                        value={category}
                                        onClick={() =>
                                            setValue("category", category)
                                        }
                                    >
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.description && (
                            <Wrapper className="text-red-500 font-semibold text-xs">
                                {errors.description.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>

                    <Box className="flex flex-1 flex-col gap-2">
                        <Label className="text-black text-md" htmlFor="picture">
                            Image
                        </Label>
                        <input
                            type="file"
                            id="picture"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message:
                                        "The post picture is required. Please upload a picture.",
                                },
                            })}
                            onChange={handleChange}
                            className="custom-input-field h-min w-full flex-1 indent-2 text-base font-normal"
                        />
                        {errors.img && (
                            <Wrapper className="text-red-500 font-semibold text-xs">
                                {errors.img.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>

                    <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                        <Label className="text-black text-md" htmlFor="price">
                            Price
                        </Label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Enter the price",
                                },
                            })}
                            placeholder="Enter Product Price"
                            className="custom-input-field w-full flex-1 indent-2 text-base text-black font-normal"
                        />
                        {errors.price && (
                            <Wrapper className="text-red-500 font-semibold text-xs">
                                {errors.price.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>

                    <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                        <Label className="text-black text-md" htmlFor="price">
                            Price
                        </Label>
                        <input
                            type="text"
                            id="quantity"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Enter the quantity",
                                },
                            })}
                            placeholder="Enter Product Quantity"
                            className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                        />
                        {errors.quantity && (
                            <Wrapper className="text-red-500 font-semibold text-xs">
                                {errors.quantity.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>

                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="text-rich-black-900 bg-pure-gray-300 w-20 disabled:bg-pure-gray-400 hover:bg-pure-gray-400 disabled:text-rich-black-5 flex select-none flex-col items-stretch justify-center overflow-hidden rounded-md px-2 py-3 font-bold hover:scale-[0.99]"
                        >
                            Post
                        </Button>
                    </DialogFooter>
                </Box>
            </form>
        </Box>
    );
}

function Post() {
    return (
        <Section className="flex flex-col w-full space-y-6">
            <Box className="flex self-stretch py-1 border-b border-black">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="bg-custom-border hover:bg-custom-hover transition-all duration-300 font-bold"
                        >
                            Add Post
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <Form />
                    </DialogContent>
                </Dialog>
            </Box>
        </Section>
    );
}

export default Post;
