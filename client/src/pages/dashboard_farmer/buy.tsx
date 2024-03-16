import Card from "@components/core/dashboard_farmer/card";

import { Main, Box } from "@components/common/containers";
import { Typography } from "@components/common/typography";

export default function Buy() {
    return (
        <Main className="flex flex-col relative top-0.5 pt-5 px-4">
            <Typography variant="h2" className="border-b-0 max-md:text-2xl">
                Buy all the necessities in one click 👋
            </Typography>

            <Box className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10">
                <Card
                    category="Fertilizers"
                    description="Get the best fertilizers for your farm"
                    img="https://t4.ftcdn.net/jpg/00/87/62/49/360_F_87624930_7n7NgLCFHff7IGr85DCgOcE2aPunov2m.jpg"
                    name="Fertilizers"
                    price={100}
                    quantity={10}
                />
                <Card
                    category="Seeds"
                    description="Get the best seeds for your farm"
                    img="https://t4.ftcdn.net/jpg/00/87/62/49/360_F_87624930_7n7NgLCFHff7IGr85DCgOcE2aPunov2m.jpg"
                    name="Seeds"
                    price={200}
                    quantity={20}
                />
                <Card
                    category="Pesticides"
                    description="Get the best pesticides for your farm"
                    img="https://t4.ftcdn.net/jpg/00/87/62/49/360_F_87624930_7n7NgLCFHff7IGr85DCgOcE2aPunov2m.jpg"
                    name="Pesticides"
                    price={300}
                    quantity={30}
                />
            </Box>
        </Main>
    );
}
