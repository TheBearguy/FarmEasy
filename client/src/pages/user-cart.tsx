import { Wrapper } from "@components/common/containers";
import CartItem from "@components/core/user/card-normal";

export default function UserCart() {
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
                        <CartItem
                            name="Iphone 13 Pro Max"
                            price={1500}
                            quantity={0}
                            category="Electronics"
                            description="This is a description of the product"
                            img="https://www.shutterstock.com/image-vector/vector-illustration-detailed-glossy-black-260nw-613618706.jpg"
                        />
                        <CartItem
                            name="Iphone 13 Pro Max"
                            price={1500}
                            quantity={0}
                            category="Electronics"
                            description="This is a description of the product"
                            img="https://www.shutterstock.com/image-vector/vector-illustration-detailed-glossy-black-260nw-613618706.jpg"
                        />
                        <CartItem
                            name="Iphone 13 Pro Max"
                            price={1500}
                            quantity={0}
                            category="Electronics"
                            description="This is a description of the product"
                            img="https://www.shutterstock.com/image-vector/vector-illustration-detailed-glossy-black-260nw-613618706.jpg"
                        />
                        <CartItem
                            name="Iphone 13 Pro Max"
                            price={1500}
                            quantity={0}
                            category="Electronics"
                            description="This is a description of the product"
                            img="https://www.shutterstock.com/image-vector/vector-illustration-detailed-glossy-black-260nw-613618706.jpg"
                        />
                    </div>

                    <div className="flex-[1]">
                        <div className="text-lg font-bold">Summary</div>

                        <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                            <div className="flex justify-between">
                                <div className="uppercase text-md md:text-lg font-medium text-black">
                                    Subtotal
                                </div>
                                <div className="text-md md:text-lg font-medium text-black">
                                    &#8377; 2000.00
                                </div>
                            </div>

                            <div className="text-sm md:text-md py-5 border-t mt-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Molestiae officia laborum
                                architecto et hic voluptas, non voluptatibus
                                obcaecati ab cupiditate? Voluptatibus ducimus
                                magni atque tempora, facilis qui deleniti
                                laudantium velit.
                            </div>
                        </div>

                        {/* CHECKOUT BUTTON */}
                        <button className="bg-black text-white py-4 rounded-full w-full text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Checkout
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
