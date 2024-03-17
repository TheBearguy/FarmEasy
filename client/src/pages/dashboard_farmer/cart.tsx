import { useEffect, useState } from "react";

import { Wrapper } from "@components/common/containers";
import CartItem from "@components/core/user/card-normal";

import { toast } from "sonner";
import { ProductProps } from "@/types";

export default function UserCart() {
    const [cart, setCart] = useState<ProductProps[]>([]);

    useEffect(() => {
        const dataString = localStorage.getItem("FarmerCart");

        if (!dataString) {
            setCart([]);
            return;
        }

        if (dataString) {
            setCart(JSON.parse(dataString));
        }
    }, []);

    if (!cart.length) {
        return (
            <div className="w-full md:my-20 px-10">
                <Wrapper>
                    <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                            Shopping Cart
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row md:gap-12 py-10">
                        <div className="flex-[2] flex flex-col mx-7 gap-6">
                            <div className="text-lg font-bold">Cart Items</div>
                            You have No items in your cart
                        </div>

                        <div className="flex-[1]">
                            <div className="text-lg font-bold">Summary</div>

                            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                <div className="flex justify-between">
                                    <div className="uppercase text-md md:text-lg font-medium text-black">
                                        Subtotal
                                    </div>
                                    <div className="text-md md:text-lg font-medium text-black">
                                        0
                                    </div>
                                </div>

                                <div className="text-sm md:text-md py-5 border-t mt-5 text-red-200">
                                    By clicking to Checkout button, You are
                                    agreeing to our privacy policy and terms and
                                    conditions.
                                </div>
                            </div>

                            {/* CHECKOUT BUTTON */}
                            <button
                                className="bg-black text-white py-4 rounded-full w-full text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                                disabled
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </Wrapper>
            </div>
        );
    }

    return (
        <div className="w-full md:my-20 px-10">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Shopping Cart
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row md:gap-12 py-10">
                    <div className="flex-[2] flex flex-col mx-7 gap-6">
                        <div className="text-lg font-bold">Cart Items</div>
                        {cart.map((item, index) => (
                            <CartItem key={index} {...item} />
                        ))}
                    </div>

                    <div className="flex-[1]">
                        <div className="text-lg font-bold">Summary</div>

                        <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                            <div className="flex justify-between">
                                <div className="uppercase text-md md:text-lg font-medium text-black">
                                    Subtotal
                                </div>
                                <div className="text-md md:text-lg font-medium text-black">
                                    $
                                    {cart.reduce(
                                        (acc, item) =>
                                            acc +
                                            item.prodPrice * item.prodQuantity,
                                        0,
                                    )}
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>Method: Cash on Delivery</div>

                            <div className="text-sm md:text-md py-5 border-t mt-5 text-red-400">
                                By clicking to Checkout button, You are agreeing
                                to our privacy policy and terms and conditions.
                            </div>
                        </div>

                        {/* CHECKOUT BUTTON */}
                        <button
                            className="bg-black text-white py-4 rounded-full w-full text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={() => {
                                localStorage.removeItem("Cart");
                                setCart([]);

                                toast.success(
                                    `The order has been created with orderID ${Math.round(100 * Math.random() * 40000)}`,
                                    {
                                        position: "bottom-right",
                                        duration: 3000,
                                    },
                                );
                                setTimeout(() => {
                                    window.location.replace("/success");
                                }, 3000);
                            }}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
