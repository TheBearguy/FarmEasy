import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "@/icons";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Box, Wrapper } from "@components/common/containers";
import { Button } from "@components/common/button";

import { toast } from "sonner";

type formProps = {
    email: string;
    password: string;
};

export const LoginForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<formProps>();

    const togglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const submitLoginForm = async (data: formProps) => {
        try {
            toast.success("Logged in successfully", {
                position: "bottom-right",
            });
            navigate("/dashboard");
            reset();
        } catch (error) {
            toast.error("Invalid email or password", {
                position: "bottom-right",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(submitLoginForm)}>
            <Box className="flex flex-col items-stretch justify-center space-y-4 py-5">
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

                <Box className="flex flex-col justify-center gap-1">
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
                                className="text-rich-black-25 absolute right-0 z-[10] cursor-pointer pr-2 text-2xl"
                            >
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

                    <Box className="flex select-none items-center justify-between self-end">
                        <Link
                            to="/forgot-password"
                            className="text-pure-blue-100 text-xs"
                        >
                            Forgot Password?
                        </Link>
                    </Box>
                </Box>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-rich-black-900 bg-rich-yellow-50 disabled:bg-rich-black-300 disabled:text-rich-black-5 flex select-none flex-col items-stretch justify-center overflow-hidden rounded-md px-2 py-3 font-bold hover:scale-[0.99]"
                >
                    Sign In
                </Button>
                <Box className="select-none">
                    <Wrapper className="text-rich-black-5 text-sm">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-pure-blue-100">
                            Sign Up
                        </Link>
                    </Wrapper>
                </Box>
            </Box>
        </form>
    );
};

export default LoginForm;
