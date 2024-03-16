import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "@/icons";

import { Button } from "@components/common/button";
import { Box, Wrapper } from "@components/common/containers";

import { toast } from "sonner";

type formProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const SignUpForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const {
        reset,
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<formProps>();

    const togglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const submitSignUpForm = async (data: formProps) => {
        try {

            toast.success("Account created successfully", {
                position: "bottom-right",
            });
            navigate("/login");
            reset();
            toast.error("Invalid email or password", {
                position: "bottom-right",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(submitSignUpForm)}>
            <Box className="flex flex-col items-stretch justify-center space-y-4 py-5">
                <Box className="text-rich-black-5 flex flex-row gap-5 text-sm max-sm:flex-col">
                    <Box className="flex flex-1 flex-col gap-2">
                        <label className="important" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            {...register("firstName", {
                                required: {
                                    value: true,
                                    message: "First Name is required",
                                },
                            })}
                            placeholder="First Name"
                            className="custom-input-field h-min w-full indent-2 text-base font-normal"
                        />
                        {errors.firstName && (
                            <Wrapper className="text-rich-yellow-50 text-xs">
                                {errors.firstName.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>

                    <Box className="flex flex-1 flex-col gap-2">
                        <label className="important" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            {...register("lastName", {
                                required: {
                                    value: true,
                                    message: "Last Name is required",
                                },
                            })}
                            placeholder="Last Name"
                            className="custom-input-field h-min w-full flex-1 indent-2 text-base font-normal"
                        />
                        {errors.lastName && (
                            <Wrapper className="text-rich-yellow-50 text-xs">
                                {errors.lastName.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>
                </Box>

                <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                    <label className="important" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Enter your email",
                            },
                        })}
                        placeholder="Enter your email address"
                        className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                    />
                    {errors.email && (
                        <Wrapper className="text-rich-yellow-50 text-xs">
                            {errors.email.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                    <label className="important" htmlFor="password">
                        Password
                    </label>
                    <Wrapper className="relative flex w-full flex-1 items-center">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Enter your Password",
                                },
                            })}
                            placeholder="Enter your password"
                            className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                        />
                        <Wrapper
                            onClick={togglePassword}
                            className="text-rich-black-25 absolute right-0 z-[10] cursor-pointer pr-2 text-2xl">
                            {showPassword ? (
                                <AiOutlineEyeInvisible />
                            ) : (
                                <AiOutlineEye />
                            )}
                        </Wrapper>
                    </Wrapper>
                    {errors.password && (
                        <Wrapper className="text-rich-yellow-50 text-xs">
                            {errors.password.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                    <label className="important" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword", {
                            required: true,
                            validate: (value) =>
                                value === getValues("password") ||
                                "Passwords do not match",
                        })}
                        placeholder="Enter your password"
                        className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                    />
                    {errors.confirmPassword && (
                        <Wrapper className="text-rich-yellow-50 text-xs">
                            {errors.confirmPassword.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-rich-black-900 bg-rich-yellow-50 disabled:bg-rich-black-300 disabled:text-rich-black-5 flex select-none flex-col items-stretch justify-center overflow-hidden rounded-md px-2 py-3 font-bold hover:scale-[0.99]">
                    Create Account
                </Button>
            </Box>
        </form>
    );
};

export default SignUpForm;