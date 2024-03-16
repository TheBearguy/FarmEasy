import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@components/common/button";
import { Section, Box, Wrapper } from "@components/common/containers";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@components/common/dialog";

interface formProps {
    postText: string;
    picture: string;
}

import { toast } from "sonner";

function Form() {
    const [imageUrl, setImageUrl] = useState<string>("");

    const {
        register,
        reset,
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
                <Box className="flex flex-col gap-3">
                    <Box className="flex flex-1 flex-col gap-2">
                        <textarea
                            {...register("postText", {
                                required: {
                                    value: true,
                                    message:
                                        "The post text is required. Please enter a post.",
                                },
                                validate: (value) =>
                                    value.trim().length > 10 ||
                                    "The post text must be at least 10 characters long.",
                            })}
                            id="postText"
                            placeholder="Enter your post here..."
                            className="custom-input-field h-min w-full indent-2 text-base font-normal"
                        />
                        {errors.postText && (
                            <Wrapper className="text-red-500 font-semibold text-xs">
                                {errors.postText.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>

                    <Box className="flex flex-1 flex-col gap-2">
                        <input
                            type="file"
                            id="picture"
                            {...register("picture", {
                                required: {
                                    value: true,
                                    message:
                                        "The post picture is required. Please upload a picture.",
                                },
                            })}
                            onChange={handleChange}
                            className="custom-input-field h-min w-full flex-1 indent-2 text-base font-normal"
                        />
                        {errors.picture && (
                            <Wrapper className="text-red-500 font-semibold text-xs">
                                {errors.picture.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>

                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="text-rich-black-900 bg-pure-gray-300 disabled:bg-pure-gray-400 hover:bg-pure-gray-400 disabled:text-rich-black-5 flex select-none flex-col items-stretch justify-center overflow-hidden rounded-md px-2 py-3 font-bold hover:scale-[0.99]"
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
                            className="bg-pure-gray-200 hover:bg-pure-gray-300"
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
