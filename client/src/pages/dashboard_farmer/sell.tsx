import { useEffect, useState } from "react";

import { Typography } from "@components/common/typography";
import { Box, Section, Main } from "@components/common/containers";
import PostForm from "@components/core/dashboard_farmer/post-form";



export default function Feed() {
    return (
        <Main className="space-y-6">
            <Section>
                <PostForm />
            </Section>
            <Section className="flex flex-col justify-center items-center">
                <Box className="flex justify-center items-center">
                    <img src="/assets/Farming.png" alt="Farming" width={700} />
                </Box>
            </Section>
        </Main>
    );
}
