import { Button } from "@components/common/button";
import { Box, Main } from "@components/common/containers";

import { CiShoppingCart } from "@/icons";
import { Typography } from "@components/common/typography";

export default function User() {
    return (
        <Main className="flex flex-col">
            <Button className="flex bg-white text-black hover:bg-white active:bg-white focus:bg-white self-end mx-10 my-5 p-1 w-fit relative">
                <CiShoppingCart className="text-2xl" />
                <Typography
                    variant="h6"
                    className="absolute -bottom-2 -left-1 text-red-600 font-bold"
                >
                    6
                </Typography>
            </Button>
        </Main>
    );
}
