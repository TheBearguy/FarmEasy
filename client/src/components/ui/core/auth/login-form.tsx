import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "@/icons";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Box, Wrapper } from "@components/common/containers";
import { Button } from "@components/common/button";

import { toast } from "sonner";
import { login } from "@/api/authAPI";
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
        console.log(data);
        try {
            const user = await login(data).catch(() => {
                toast.error("Invalid email or password", {
                    position: "bottom-right",
                });
            });

            toast.success("Logged in successfully", {
                position: "bottom-right",
            });

            if (user?.role === "User") {
                navigate("/dashboard/farmer"); //! This should be /dashboard/user
            } else if (user?.role === "Admin") {
                navigate("/dashboard/admin");
            } else if (user?.role === "Farmer") {
                navigate("/dashboard/farmer");
            }
            reset();
        } catch (error) {
            toast.error("Invalid email or password", {
                position: "bottom-right",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(submitLoginForm)}>
            <Box className="px-[20px] md:px-[100px] flex flex-col items-stretch justify-center space-y-4 py-5 border-2 border-black px-[100px] rounded-3xl mt-[30px] bg-green-300">
                <Box className="text-rich-black-1100 flex flex-1 flex-col items-start gap-2 text-sm">
                    <label className="important font-semibold text-black" htmlFor="email">
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
                        className="custom-input-field w-full flex-1 bg-white indent-2 text-base font-normal"
                    />
                    {errors.email && (
                        <Wrapper className="text-rich-yellow-50 text-xs">
                            {errors.email.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Box className="flex flex-col justify-center gap-1">
                    <Box className="text-rich-black-1100 flex flex-1 flex-col items-start gap-2 text-sm">
                        <label className="important font-semibold text-black" htmlFor="password">
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
                                className="custom-input-field bg-white w-full flex-1 indent-2 text-base font-normal"
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
                            <Wrapper className="text-red-600 text-xs">
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
                    className="w-full bg-red-400 text-black p-2 rounded-md hover:bg-blue-600 bg-lavender border-2 border-black"
                >
                    Sign In
                </Button>
                <Box className="select-none text-center">
                    <Wrapper className="text-rich-black-900 text-sm">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-black-100 font-bold text-black">
                            Sign Up
                        </Link>
                    </Wrapper>
                </Box>
            </Box>
        </form>
    );
};

export default LoginForm;
