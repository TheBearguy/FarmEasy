import { useState } from "react";
import { Box } from "@components/common/containers";
import { RiDeleteBin6Line } from "@/icons";

import { ProductProps } from "@/types";

const ProductCard = ({
    category,
    description,
    img,
    name,
    price,
    quantity,
}: ProductProps) => {
    const [currQuantity, setQuantity] = useState(quantity);

    return (
        <div className="flex py-3 gap-3 md:gap-5 border-b">
            <div className="shrink-0 aspect-square flex items-center justify-center w-[50px] md:w-[120px]">
                <img src={img} alt="Show Image" />
            </div>

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col md:text-2xl font-semibold text-black/[0.8]">
                        {name}
                    </div>

                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        {description}
                    </div>

                    <div className="text-sm md:text-md font-medium text-black/[0.9] mt-2">
                        MRP : &#8377; {price}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        <div>
                            <div className="font-semibold">Category : </div>
                            <div>{category}</div>
                        </div>
                        <div className="flex items-center gap-1 ml-0">
                            <div className="font-semibold">Quantity : </div>
                            <input
                                className="w-[50px] h-[30px] font-bold border-2 border-black rounded-md p-2 text-center text-black/[0.5] focus:outline-none focus:border-black"
                                type="text"
                                value={currQuantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                    </div>

                    <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
